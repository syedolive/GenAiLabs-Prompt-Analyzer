import Axios from "axios";
import { cache } from "react";
import { ModelsResponseElement } from "./dto/models.dto";
import { SampleProfileFromSchema } from "@/features/sampling_profile/dto/sampling-profile.dto";
import { CreateSamplingProfileResponse } from "./dto/sampling-profile.dto";
import { PromptComposerFormSchema } from "@/features/prompt_composer/dto/prompt.zod";
import {
  SinglePromptResponse,
  type CreatePromptResponse,
  type PromptListResponse,
} from "./dto/prompts-request.dto";

const BASE_URL =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_API_URL
    : process.env.API_URL;

const api = Axios.create({
  baseURL: BASE_URL,
});

export const SSE_PROMPT_URL = (jobId: string) =>
  `${BASE_URL}/api/v${API_VERSION}/inference/stream?job_id=${jobId}`;

const API_VERSION = 1 as const;

export const reactCache = <T, A extends any[]>(
  fn: (...args: A) => Promise<T>
) => cache(fn);

export const getModels = reactCache(async () => {
  return api.get<ModelsResponseElement[]>(`api/v${API_VERSION}/models`);
});

export const getSamplingProfiles = async () => {
  return api.get<CreateSamplingProfileResponse[]>(
    `api/v${API_VERSION}/sampling-profile`
  );
};
export const getSamplingProfilesCached = reactCache(getSamplingProfiles);

export const createSamplingProfile = (values: SampleProfileFromSchema) => {
  return api.post<CreateSamplingProfileResponse>(
    `api/v${API_VERSION}/sampling-profile`,
    values
  );
};

export const getPrompts = async (page: number) => {
  return api.get<PromptListResponse>(
    `api/v${API_VERSION}/prompt?page=${page}&limit=10`
  );
};

export const sendPrompt = (values: PromptComposerFormSchema) => {
  return api.post<CreatePromptResponse>(`api/v${API_VERSION}/prompt`, values);
};

export const getPrompt = reactCache((id: string) => {
  return api.get<SinglePromptResponse>(`api/v${API_VERSION}/prompt/${id}`);
});
