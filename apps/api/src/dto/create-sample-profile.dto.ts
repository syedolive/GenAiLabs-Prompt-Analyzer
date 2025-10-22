import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSampleProfileDto {
  @IsString()
  profileName: string;

  @IsNumber()
  temperature: number;

  @IsNumber()
  topP: number;

  @IsNumber()
  topK: number;

  @IsOptional()
  @IsNumber()
  maxTokens?: number;

  @IsOptional()
  @IsNumber()
  presencePenalty?: number;

  @IsOptional()
  @IsNumber()
  frequencyPenalty?: number;
}
