import { Injectable } from '@nestjs/common';
import { DEFAULT_STOPWORDS } from '../sample/stopwords';

@Injectable()
export class CompletenessMetric {
  private tokenize(text: string) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length >= 3 && !DEFAULT_STOPWORDS.has(t))
      .map((t) => (t.endsWith('s') ? t.slice(0, -1) : t));
  }

  private toSet(tokens: string[]) {
    return new Set(tokens);
  }

  private overlapCount(setA: Set<unknown>, setB: Set<unknown>) {
    let c = 0;
    for (const t of setA) if (setB.has(t)) c++;
    return c;
  }

  calculate(prompt: string, response: string) {
    const pTokens = this.tokenize(prompt);
    const rTokens = this.tokenize(response);

    const P = this.toSet(pTokens);
    const R = this.toSet(rTokens);

    if (P.size === 0)
      return {
        score: null,
        reason: 'not_enough_prompt_signal',
        P_size: 0,
        overlap: 0,
      };

    const base = this.overlapCount(P, R) / P.size;

    return {
      score: Number(base.toFixed(4)),
      P_size: P.size,
      R_size: R.size,
      overlap: this.overlapCount(P, R),
    };
  }
}
