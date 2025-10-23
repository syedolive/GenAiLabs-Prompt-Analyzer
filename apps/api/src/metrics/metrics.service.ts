import { Injectable } from '@nestjs/common';
import {
  LengthAppropriatenessProvider,
  TLengthMetrics,
} from './providers/length-appropriateness.provider';
import { PrismaService } from 'src/prisma-module/prisma.service';
import { OnEvent } from '@nestjs/event-emitter';
import {
  INFERENCE_COMPLETED,
  InferenceCompletedEvent,
} from 'src/dto/events.dto';
import { tokenCount } from 'src/utils/helpers';
import { CompletenessMetric } from './providers/completeness.provider';

@Injectable()
export class MetricsService {
  constructor(
    private readonly lengthAppropriatenessProvider: LengthAppropriatenessProvider,
    private readonly completenessProvider: CompletenessMetric,
    private readonly prisma: PrismaService,
  ) {}

  calculateLengthMetrics(prompt: string, responseId: string, response: string) {
    const promptTokenCount = tokenCount(prompt);
    const responseTokenCount = tokenCount(response);
    const metrics = this.lengthAppropriatenessProvider.calculate({
      prompt,
      response: response,
      promptTokens: promptTokenCount,
      responseTokens: responseTokenCount,
    });
    return { metrics, responseId };
  }

  async saveLengthMetrics(
    metricPayload: {
      metrics: TLengthMetrics;
      responseId: string;
    }[],
  ) {
    return await this.prisma.lengthMetrics.createMany({
      data: metricPayload.map(({ metrics, responseId }) => ({
        avg_sentence_length: metrics.averageSentenceLength,
        response_token_count: metrics.tokenCount,
        response_sentence_count: metrics.sentenceCount,
        response_word_count: metrics.wordCount,
        response_to_prompt_ratio: metrics.responseToPromptRatio,
        prompt_response_id: responseId,
      })),
    });
  }

  @OnEvent(INFERENCE_COMPLETED, { async: true })
  async onInferenceCompleted(payload: InferenceCompletedEvent) {
    const { jobId, prompt, result } = payload;
    const { metrics } = this.calculateLengthMetrics(prompt, jobId, result);
    await this.saveLengthMetrics([{ metrics: metrics, responseId: jobId }]);
  }

  calculateCompleteness(prompt: string, response: string) {
    return this.completenessProvider.calculate(prompt, response);
  }
}
