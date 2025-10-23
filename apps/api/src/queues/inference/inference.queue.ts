import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Job } from 'bullmq';
import {
  INFERENCE_COMPLETED,
  InferenceCompletedEvent,
} from 'src/dto/events.dto';
import { GeminiProvider } from 'src/llm-providers/providers/gemini.provider';

@Processor('inference', { concurrency: 3 })
export class InferenceQueue extends WorkerHost {
  private logger = new Logger(InferenceQueue.name);
  constructor(
    private readonly geminiProvider: GeminiProvider,
    private eventEmitter: EventEmitter2,
  ) {
    super();
  }
  async process(job: Job<{ prompt: string }, string, string>) {
    const { prompt } = job.data;
    try {
      let result: string = '';
      for await (const chunk of this.geminiProvider.stream(prompt)) {
        result += chunk;
        await job.updateProgress(chunk);
      }
      return Promise.resolve(result);
    } catch (e) {
      return Promise.reject(new Error(e));
    }
  }

  @OnWorkerEvent('error')
  onError(job: Job<{ prompt: string }, any, string>, error: Error) {
    this.logger.error(`Job ${job.id} failed with error: ${error.message}`);
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job<{ prompt: string }, any, string>, result: string) {
    this.logger.debug(`Job ${job.id} completed: ${result}`);
    if (job.id) {
      this.eventEmitter.emit(
        INFERENCE_COMPLETED,
        new InferenceCompletedEvent(job.data.prompt, job.id, result),
      );
    }
  }
}
