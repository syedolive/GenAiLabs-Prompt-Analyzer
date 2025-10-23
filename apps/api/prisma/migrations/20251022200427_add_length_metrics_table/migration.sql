-- CreateTable
CREATE TABLE "length_metrics" (
    "id" UUID NOT NULL,
    "prompt_response_id" UUID NOT NULL,
    "response_token_count" INTEGER NOT NULL,
    "response_sentence_count" INTEGER NOT NULL,
    "response_word_count" INTEGER NOT NULL,
    "avg_sentence_length" DECIMAL(6,2) NOT NULL,
    "response_to_prompt_ratio" DECIMAL(8,4) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "extras" JSONB,

    CONSTRAINT "length_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "length_metrics_prompt_response_id_key" ON "length_metrics"("prompt_response_id");

-- CreateIndex
CREATE INDEX "length_metrics_prompt_response_id_idx" ON "length_metrics"("prompt_response_id");

-- CreateIndex
CREATE INDEX "length_metrics_response_to_prompt_ratio_idx" ON "length_metrics"("response_to_prompt_ratio");

-- CreateIndex
CREATE INDEX "length_metrics_response_token_count_idx" ON "length_metrics"("response_token_count");

-- AddForeignKey
ALTER TABLE "length_metrics" ADD CONSTRAINT "length_metrics_prompt_response_id_fkey" FOREIGN KEY ("prompt_response_id") REFERENCES "prompt_response"("id") ON DELETE CASCADE ON UPDATE CASCADE;
