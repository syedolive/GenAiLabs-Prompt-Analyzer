import { Injectable } from '@nestjs/common';

export type LengthMetricsInput = {
  prompt: string;
  response: string;
  promptTokens: number;
  responseTokens: number;
};

export type TLengthMetrics = {
  tokenCount: number;
  sentenceCount: number;
  averageSentenceLength: number;
  responseToPromptRatio: number;
  wordCount: number;
};

@Injectable()
export class LengthAppropriatenessProvider {
  private divideOrZero(num: number, den: number) {
    return den === 0 ? 0 : num / den;
  }

  private countWords(text: string): number {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  private countSentences(text: string): number {
    const normalized = text
      .replace(/\u2026/g, '...')
      .replace(/\s+/g, ' ')
      .trim();
    if (!normalized) return 0;
    const parts = normalized.split(/(?<=[.!?])\s+(?=[A-Z0-9"'(])/);
    return parts.filter((p) => p.trim().length > 0).length;
  }

  calculate(input: LengthMetricsInput): TLengthMetrics {
    const { response, promptTokens, responseTokens } = input;
    const tokenCount = responseTokens;
    const sentenceCount = this.countSentences(response);
    const wordCount = this.countWords(response);
    const averageSentenceLength = Number(
      this.divideOrZero(wordCount, sentenceCount).toFixed(2),
    );
    const responseToPromptRatio = Number(
      this.divideOrZero(responseTokens, promptTokens).toFixed(4),
    );

    return {
      tokenCount,
      sentenceCount,
      averageSentenceLength,
      responseToPromptRatio,
      wordCount,
    };
  }
}
