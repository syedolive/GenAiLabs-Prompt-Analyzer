import { Module } from '@nestjs/common';
import { GeminiProvider } from './providers/gemini.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [GeminiProvider],
  exports: [GeminiProvider],
})
export class LLMProviderModule {}
