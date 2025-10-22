-- CreateTable
CREATE TABLE "llm_model" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "rpm" INTEGER NOT NULL,
    "rpd" INTEGER NOT NULL,
    "tpm" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "llm_model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sampling_profile" (
    "id" UUID NOT NULL,
    "profile_name" VARCHAR(255) NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "top_k" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "top_p" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "presence_penalty" DOUBLE PRECISION DEFAULT 0.0,
    "frequency_penalty" DOUBLE PRECISION DEFAULT 0.0,
    "max_tokens" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sampling_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prompt" (
    "id" UUID NOT NULL,
    "prompt" VARCHAR(255) NOT NULL,
    "tokens" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "model_to_prompt" (
    "model_id" UUID NOT NULL,
    "prompt_id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "model_to_prompt_pkey" PRIMARY KEY ("model_id","prompt_id")
);

-- CreateTable
CREATE TABLE "profile_to_prompt" (
    "profile_id" UUID NOT NULL,
    "prompt_id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_to_prompt_pkey" PRIMARY KEY ("profile_id","prompt_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "llm_model_name_key" ON "llm_model"("name");

-- CreateIndex
CREATE INDEX "model_to_prompt_model_id_idx" ON "model_to_prompt"("model_id");

-- CreateIndex
CREATE INDEX "model_to_prompt_prompt_id_idx" ON "model_to_prompt"("prompt_id");

-- CreateIndex
CREATE INDEX "profile_to_prompt_profile_id_idx" ON "profile_to_prompt"("profile_id");

-- CreateIndex
CREATE INDEX "profile_to_prompt_prompt_id_idx" ON "profile_to_prompt"("prompt_id");

-- AddForeignKey
ALTER TABLE "model_to_prompt" ADD CONSTRAINT "model_to_prompt_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "llm_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "model_to_prompt" ADD CONSTRAINT "model_to_prompt_prompt_id_fkey" FOREIGN KEY ("prompt_id") REFERENCES "prompt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_to_prompt" ADD CONSTRAINT "profile_to_prompt_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "sampling_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_to_prompt" ADD CONSTRAINT "profile_to_prompt_prompt_id_fkey" FOREIGN KEY ("prompt_id") REFERENCES "prompt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
