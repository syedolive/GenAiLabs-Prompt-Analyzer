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

  async addToInferenceQueue(jobId: string, response: string) {
    try {
      await this.inferenceQueue.add(
        'generate',
        {
          prompt: response,
        },
        {
          jobId: jobId,
          removeOnComplete: true,
          removeOnFail: true,
          delay: 1000,
        },
      );
    } catch (error) {
      console.log(error);
    }
  }
}
