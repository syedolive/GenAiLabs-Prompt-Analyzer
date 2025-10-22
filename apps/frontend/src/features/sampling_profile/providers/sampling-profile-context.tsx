import { useForm } from "react-hook-form";
import {
  sampleProfileFromSchema,
  SampleProfileFromSchema,
} from "../dto/sampling-profile.dto";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSamplingProfile } from "@/lib/network";
import { type CreateSamplingProfileResponse } from "../../../lib/network/dto/sampling-profile.dto";
import { AxiosResponse } from "axios";
import { CREATE_SAMPLING_PROFILE_KEY } from "@/hooks/query_hooks/query_keys";

type SamplingProfileContextValue = {
  profiles: CreateSamplingProfileResponse[];
  form: ReturnType<typeof useForm<SampleProfileFromSchema>>;
  submit: (
    values: SampleProfileFromSchema
  ) => Promise<AxiosResponse<CreateSamplingProfileResponse>>;
  reset: () => void;
  setProfile: (id: string | null) => void;
  selectedProfile: CreateSamplingProfileResponse | null;
  createOnly: boolean;
};

const SamplingProfileContext =
  createContext<SamplingProfileContextValue | null>(null);

export function useSamplingProfileContext() {
  const context = useContext(SamplingProfileContext);
  if (context === null) {
    throw new Error(
      "useSamplingProfileContext must be used within a SamplingProfileContextProvider"
    );
  }
  return context;
}

type SamplingProfileContextProviderProps = {
  profiles: CreateSamplingProfileResponse[];
  children: React.ReactNode;
  mutationKey?: readonly unknown[];
  createOnly: boolean;
};

export default function SamplingProfileContextProvider({
  profiles = [],
  children,
  mutationKey = [CREATE_SAMPLING_PROFILE_KEY],
  createOnly = false,
}: SamplingProfileContextProviderProps) {
  const [selectedProfileId, setSelectedProfileId] =
    useState<CreateSamplingProfileResponse | null>(null);
  const mutation = useMutation({
    mutationFn: (values: SampleProfileFromSchema) =>
      createSamplingProfile(values),
    mutationKey,
  });
  const form = useForm<SampleProfileFromSchema>({
    resolver: zodResolver(sampleProfileFromSchema),
    defaultValues: {
      profileName: "",
      temperature: 1.0,
      topP: 0.95,
      topK: 64,
      maxTokens: 512,
    },
  });

  const submit = useCallback(
    (values: SampleProfileFromSchema) => {
      return mutation.mutateAsync(values);
    },
    [form, mutation]
  );

  const reset = useCallback(() => form.reset(), [form]);

  const setProfile = useCallback((id: string | null) => {
    const profile = profiles.find((p) => p.id === id);
    if (profile !== undefined) {
      setSelectedProfileId(profile);
      return
    }
    setSelectedProfileId(null);
  }, []);

  const value = useMemo(
    () => ({
      profiles,
      form,
      submit,
      reset,
      setProfile,
      selectedProfile: selectedProfileId,
      createOnly
    }),
    [profiles, form, submit, reset, setProfile, selectedProfileId, createOnly]
  );

  return (
    <SamplingProfileContext.Provider value={value}>
      {children}
    </SamplingProfileContext.Provider>
  );
}
