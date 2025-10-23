import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateSampleProfileDto } from './dto/create-sample-profile.dto';
import { CreatePromptDto } from './dto/create-prompt-dto';

@Controller({
  version: '1',
  path: '/',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('session')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('models')
  async getModels() {
    return await this.appService.getModels();
  }

  @Get('sampling-profile')
  async samplingProfile() {
    return await this.appService.getSamplingProfile();
  }

  @Post('sampling-profile')
  async createProfile(
    @Body(new ValidationPipe({ transform: true })) body: CreateSampleProfileDto,
  ) {
    return await this.appService.createSampleProfile(body);
  }

  @Get('prompt')
  async getPrompts(@Query('page') page: number, @Query('limit') limit: number) {
    return await this.appService.getPrompts(page, limit);
  }

  @Get('prompt/:id/export')
  async exportPrompt(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.exportPrompt(id);
  }

  @Get('prompt/:id')
  async getPrompt(@Param('id', ParseUUIDPipe) id: string) {
    return await this.appService.getPrompt(id);
  }

  @Post('prompt')
  async sendPrompt(
    @Body(new ValidationPipe({ transform: true }))
    body: CreatePromptDto,
  ) {
    return await this.appService.sendPrompt(body);
  }

  @Get('metric/:promptId/length-metrics')
  async getPromptLengthMetrics(@Param('promptId', ParseUUIDPipe) id: string) {
    return await this.appService.getPromptLengthMetrics(id);
  }

  @Get('metric/:promptId/completeness')
  async getPromptCompletenessMetrics(
    @Param('promptId', ParseUUIDPipe) id: string,
  ) {
    return await this.appService.getPromptCompletenessMetrics(id);
  }
}
