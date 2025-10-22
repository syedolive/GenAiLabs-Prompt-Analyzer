import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';
@Injectable()
export class GeminiProvider implements OnModuleInit {
  private gemini: GoogleGenAI;
  constructor(private configService: ConfigService) {}
  onModuleInit() {
    this.gemini = new GoogleGenAI({
      apiKey: this.configService.get('gemini.apiKey'),
    });
  }

  async generate(prompt: string) {
    const res = await this.gemini.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });
    return res.text;
  }

  async *stream(prompt: string) {
    const res = await this.gemini.models.generateContentStream({
      model: 'gemini-2.5-flash-lite',
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
        topK: 1,
        topP: 0.5,
        temperature: 0.5,
        maxOutputTokens: 1024,
      },
    });
    for await (const chunk of res) {
      if (chunk.text) yield chunk.text;
    }
  }
}
