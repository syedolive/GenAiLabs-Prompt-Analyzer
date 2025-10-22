import {
  ArrayNotEmpty,
  ArrayUnique,
  IsArray,
  IsNumber,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

export class CreatePromptDto {
  @IsString()
  prompt: string;

  @IsUUID()
  model: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsUUID('4', { each: true })
  samplingProfiles: string[];

  @IsNumber()
  @Min(0)
  tokens: string;
}
