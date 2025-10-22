import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from './prisma-module/prisma.service';
import { CreateSampleProfileDto } from './dto/create-sample-profile.dto';
import { CreatePromptDto } from './dto/create-prompt-dto';
import { QueueService } from './queues/queues.service';

@Injectable()
export class AppService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly queueService: QueueService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async getModels() {
    return this.prisma.lLMModel.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async createSampleProfile(body: CreateSampleProfileDto) {
    return await this.prisma.samplingProfile.create({
      data: {
        profile_name: body.profileName,
        temperature: body.temperature,
        top_k: body.topK,
        top_p: body.topP,
      },
    });
  }

  async getSamplingProfile() {
    return await this.prisma.samplingProfile.findMany();
  }

  async getPrompts(page: number, limit: number) {
    const offset = (page - 1) * limit;
    const count = await this.prisma.prompt.count();
    const prompts = await this.prisma.prompt.findMany({
      select: {
        id: true,
        prompt: true,
        tokens: true,
        createdAt: true,
        updatedAt: true,
      },
      skip: offset,
      take: +limit,
      orderBy: {
        createdAt: 'desc',
      },
    });
    return {
      data: prompts,
      next_page: ++page,
      has_next_page: offset + limit < count,
    };
  }

  async getPrompt(id: string) {
    const prompt = await this.prisma.prompt.findUnique({
      where: {
        id,
      },
      include: {
        responses: {
          include: {
            profile: true,
          },
        },
        models: {
          include: {
            model: true,
          },
        },
      },
    });
    if (!prompt) {
      throw new NotFoundException('The required prompt was not found');
    }
    const filter = prompt.responses.filter((p) => p.response === null);
    console.log('FILTERED ', filter);
    if (filter.length > 0) {
      for (const response of filter) {
        try {
          await this.queueService.addToInferenceQueue(
            response.id,
            prompt.prompt,
          );
        } catch (e) {
          console.log('Failed to add to inference queue', e);
        }
      }
    }
    return prompt;
  }

  async sendPrompt(body: CreatePromptDto) {
    const model = await this.prisma.lLMModel.findUnique({
      where: {
        id: body.model,
      },
    });
    if (!model) {
      throw new NotFoundException('The required model was not found');
    }
    const profiles = await this.prisma.samplingProfile.findMany({
      where: {
        id: {
          in: body.samplingProfiles,
        },
      },
    });
    if (profiles.length !== body.samplingProfiles.length) {
      throw new NotFoundException(
        'One or more sampling profiles were not found',
      );
    }
    try {
      const createPrompt = await this.prisma.prompt.create({
        data: {
          prompt: body.prompt,
          tokens: Number(body.tokens),
          models: {
            create: {
              model_id: model.id,
            },
          },
          // profiles: {
          //   createMany: {
          //     data: profiles.map((profile) => {
          //       return {
          //         profile_id: profile.id,
          //       };
          //     }),
          //   },
          // },
          responses: {
            createMany: {
              data: profiles.map((profile) => {
                return {
                  profile_id: profile.id,
                  model_id: model.id,
                };
              }),
            },
          },
        },
      });
      return createPrompt;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new BadRequestException(`Failed to create prompt: ${e}`);
    }
  }
}
