-- AlterTable
ALTER TABLE "sampling_profile" ALTER COLUMN "presence_penalty" DROP DEFAULT,
ALTER COLUMN "frequency_penalty" DROP DEFAULT,
ALTER COLUMN "max_tokens" DROP NOT NULL,
ALTER COLUMN "max_tokens" SET DEFAULT 512;
