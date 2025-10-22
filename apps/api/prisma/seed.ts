import { readFile } from 'fs/promises';
import { PrismaClient } from 'generated/client';

const client = new PrismaClient();

export interface LLMModels {
  models: Model[];
  notes: Notes;
}

export interface Model {
  id: string;
  rpm: number;
  rpd: number;
  tpm: number;
}

export interface Notes {
  tpm_is_tokens_per_minute: boolean;
  tier: string;
  last_checked_utc: Date;
}

async function seed() {
  const data = await readFile('./prisma/seed_data/llm_models.json', 'utf-8');
  const models = JSON.parse(data) as LLMModels;
  await client.lLMModel.createMany({
    data: models.models.map((model) => {
      return {
        name: model.id,
        rpm: model.rpm,
        rpd: model.rpd,
        tpm: model.tpm,
      };
    }),
  });
}

seed()
  .then(() => {
    console.log('Seed completed');
  })
  .catch((e) => console.error(e));
