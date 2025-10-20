import { OnWorkerEvent, Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { GeminiProvider } from 'src/llm-providers/gemini.provider';

@Processor('inference')
export class InferenceQueue extends WorkerHost {
  private logger = new Logger(InferenceQueue.name);
  constructor(private readonly geminiProvider: GeminiProvider) {
    super();
  }
  async process(job: Job<{ prompt: string }, any, string>) {
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
  onCompleted(job: Job<{ prompt: string }, any, string>, result: any) {
    this.logger.debug(`Job ${job.id} completed`);
  }
}
