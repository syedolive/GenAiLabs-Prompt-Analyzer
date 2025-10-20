import { BullModule } from '@nestjs/bullmq';
import { Global, Module } from '@nestjs/common';
import { InferenceQueue } from './inference/inference.queue';
import { QueueService } from './queues.service';
import { LLMProviderModule } from 'src/llm-providers/llm-provider.module';
import { InferenceQueueEvents } from './inference/inference.event';

@Global()
@Module({
  imports: [
    BullModule.registerQueue({
      name: 'inference',
      prefix: '{prompt}',
    }),
    LLMProviderModule,
  ],
  controllers: [],
  providers: [QueueService, InferenceQueue, InferenceQueueEvents],
  exports: [QueueService, InferenceQueueEvents],
})
export class QueuesModule {}
