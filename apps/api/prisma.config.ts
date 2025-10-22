import { join } from 'node:path';
import type { PrismaConfig } from 'prisma';
import { config } from 'dotenv';

config({
  path: join(__dirname, '..', '..', '.env'),
});

export default {
  schema: join(__dirname, 'prisma/schema.prisma'),
  migrations: {
    path: join(__dirname, 'prisma/migrations'),
    seed: `tsx prisma/seed.ts`,
  },
} satisfies PrismaConfig;
