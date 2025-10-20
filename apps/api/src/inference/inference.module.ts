import { Module } from '@nestjs/common';
import { InferenceService } from './inference.service';
import { InferenceController } from './inference.controller';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'inference',
      prefix: '{prompt}',
    }),
  ],
  controllers: [InferenceController],
  providers: [InferenceService],
})
export class InferenceModule {}
