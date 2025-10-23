import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { LengthAppropriatenessProvider } from './providers/length-appropriateness.provider';
import { CompletenessMetric } from './providers/completeness.provider';

@Module({
  providers: [
    MetricsService,
    LengthAppropriatenessProvider,
    CompletenessMetric,
  ],
  exports: [MetricsService],
})
export class MetricsModule {}
