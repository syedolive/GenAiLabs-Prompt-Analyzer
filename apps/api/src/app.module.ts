import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InferenceModule } from './inference/inference.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { BullModule } from '@nestjs/bullmq';
import { QueuesModule } from './queues/queues.module';
import { LLMProviderModule } from './llm-providers/llm-provider.module';
import { PrismaModuleModule } from './prisma-module/prisma-module.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      cache: true,
      isGlobal: true,
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        connection: {
          url: configService.get('redis.uri'),
        },
        defaultJobOptions: {
          removeOnComplete: true,
          removeOnFail: true,
        },
      }),
    }),
    EventEmitterModule.forRoot(),
    InferenceModule,
    QueuesModule,
    LLMProviderModule,
    PrismaModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
