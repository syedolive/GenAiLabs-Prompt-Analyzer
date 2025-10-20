import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(
    @InjectQueue('inference') private readonly inferenceQueue: Queue,
  ) {}

  get inferenceQueueName() {
    return this.inferenceQueue;
  }

  async addToInferenceQueue(params: string) {
    await this.inferenceQueue.add(
      'generate',
      {
        prompt: params,
      },
      {
        jobId: 'jiren',
      },
    );
  }
}
