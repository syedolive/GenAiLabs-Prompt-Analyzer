-- CreateTable
CREATE TABLE "prompt_response" (
    "id" UUID NOT NULL,
    "prompt_id" UUID NOT NULL,
    "model_id" UUID NOT NULL,
    "profile_id" UUID NOT NULL,
    "response" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prompt_response_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "prompt_response_prompt_id_idx" ON "prompt_response"("prompt_id");

-- CreateIndex
CREATE INDEX "prompt_response_model_id_idx" ON "prompt_response"("model_id");

-- CreateIndex
CREATE INDEX "prompt_response_profile_id_idx" ON "prompt_response"("profile_id");

-- AddForeignKey
ALTER TABLE "prompt_response" ADD CONSTRAINT "prompt_response_prompt_id_fkey" FOREIGN KEY ("prompt_id") REFERENCES "prompt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prompt_response" ADD CONSTRAINT "prompt_response_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "llm_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prompt_response" ADD CONSTRAINT "prompt_response_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "sampling_profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
