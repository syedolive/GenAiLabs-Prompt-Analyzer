"use client";

import { useForm } from "react-hook-form";
import { createContext, useCallback, useContext, useMemo } from "react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  promptComposerFormSchema,
  PromptComposerFormSchema,
} from "../dto/prompt.zod";
import { SEND_PROMPT_KEY } from "@/hooks/query_hooks/query_keys";
import { CreatePromptResponse } from "@/lib/network/dto/prompts-request.dto";
import { AxiosError, AxiosResponse } from "axios";
import { sendPrompt } from "@/lib/network";

export type LLMModels = {
  id: string;
  name: string;
};

type PromptComposerContextValue = {
  models: LLMModels[];
  form: ReturnType<typeof useForm<PromptComposerFormSchema>>;
  reset: () => void;
  mutation: ReturnType<
    typeof useMutation<
      AxiosResponse<CreatePromptResponse>,
      AxiosError,
      PromptComposerFormSchema
    >
  >;
};

const PromptComposerContext = createContext<PromptComposerContextValue | null>(
  null
);

export function usePromptComposerContext() {
  const context = useContext(PromptComposerContext);
  if (context === null) {
    throw new Error(
      "usePromptComposerContext must be used within a PromptComposerContextProvider"
    );
  }
  return context;
}

type PromptComposerContextProviderProps = {
  models: LLMModels[];
  children: React.ReactNode;
  mutationKey?: readonly unknown[];
};

export function PromptComposerProvider({
  models,
  children,
  mutationKey = [SEND_PROMPT_KEY],
}: PromptComposerContextProviderProps) {
  const mutation = useMutation<
    AxiosResponse<CreatePromptResponse>,
    AxiosError,
    PromptComposerFormSchema
  >({
    mutationKey,
    mutationFn: async (values) => await sendPrompt(values),
  });
  const form = useForm<PromptComposerFormSchema>({
    resolver: zodResolver(promptComposerFormSchema),
    defaultValues: {
      prompt: "",
      model: "",
      samplingProfiles: [],
      tokens: 0,
    },
  });

  const reset = useCallback(() => form.reset(), [form]);

  const value = useMemo(
    () => ({ form, mutation, reset, models }),
    [form, mutation, reset]
  );

  return (
    <PromptComposerContext.Provider value={value}>
      {children}
    </PromptComposerContext.Provider>
  );
}
