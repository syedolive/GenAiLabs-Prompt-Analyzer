import { Injectable } from '@nestjs/common';
import { GenerateDto } from './dto/inference.dto';
import { QueueService } from 'src/queues/queues.service';

@Injectable()
export class InferenceService {
  constructor(private readonly queueService: QueueService) {}
  async generate(params: GenerateDto) {
    await this.queueService.addToInferenceQueue(
      params.prompt,
      `${Math.random() * 10000000000000000}`,
    );
    return params;
  }
}
