-- DropForeignKey
ALTER TABLE "public"."prompt_response" DROP CONSTRAINT "prompt_response_model_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."prompt_response" DROP CONSTRAINT "prompt_response_profile_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."prompt_response" DROP CONSTRAINT "prompt_response_prompt_id_fkey";

-- AddForeignKey
ALTER TABLE "prompt_response" ADD CONSTRAINT "prompt_response_prompt_id_fkey" FOREIGN KEY ("prompt_id") REFERENCES "prompt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prompt_response" ADD CONSTRAINT "prompt_response_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "llm_model"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prompt_response" ADD CONSTRAINT "prompt_response_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "sampling_profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
