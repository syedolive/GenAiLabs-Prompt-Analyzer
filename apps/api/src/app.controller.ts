import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: 'v1',
  path: '/',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('session')
  getHello(): string {
    return this.appService.getHello();
  }
}
