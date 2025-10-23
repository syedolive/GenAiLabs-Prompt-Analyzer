import {
  Body,
  Controller,
  Post,
  Sse,
  ValidationPipe,
  MessageEvent,
  Logger,
  Query,
} from '@nestjs/common';
import { InferenceService } from './inference.service';
import { GenerateDto } from './dto/inference.dto';
import { InferenceQueueEvents } from 'src/queues/inference/inference.event';
import { Observable } from 'rxjs';

@Controller({
  version: '1',
  path: 'inference',
})
export class InferenceController {
  private logger = new Logger(InferenceController.name);
  constructor(
    private readonly inferenceService: InferenceService,
    private readonly inferenceQueueEvents: InferenceQueueEvents,
  ) {
    console.log('Controller sees events instance', this.inferenceQueueEvents);
  }

  @Post()
  async generate(
    @Body(
      new ValidationPipe({
        transform: true,
      }),
    )
    body: GenerateDto,
  ) {
    return await this.inferenceService.generate(body);
  }

  @Sse('stream')
  stream(@Query('job_id') jobId: string): Observable<MessageEvent> {
    const channel = this.inferenceQueueEvents.getChannel(jobId);
    return new Observable<MessageEvent>((observer) => {
      observer.next({ type: 'open', data: { ok: true } });
      const sub = channel.subscribe({
        next: (event) => {
          switch (event.kind) {
            case 'chunk':
              observer.next({
                type: 'chunk',
                data: event.data ?? '',
              });
              break;
            case 'failed':
              observer.next({
                type: 'failed',
                data: event.reason ?? '',
              });
              break;
            case 'completed':
              observer.next({
                type: 'completed',
                data: (event.returnValue as string) ?? '',
              });
              break;
          }
        },
        complete: () => {
          observer.complete();
        },
        error: (error) => {
          observer.next({
            type: 'error',
            data: error as string,
          });
          observer.complete();
        },
      });
      return () => {
        sub.unsubscribe();
        this.inferenceQueueEvents.closeChannel(jobId);
      };
    });
  }
}
