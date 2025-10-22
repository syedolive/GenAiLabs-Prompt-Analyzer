"use client";
import {
  InputGroup,
  InputGroupTextarea,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { ArrowUpIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ModelSelector } from "./components/model-selector";
import SamplingProfileContextProvider from "../sampling_profile/providers/sampling-profile-context";
import SamplingProfileSection from "./components/sampling-profile-section";
import { useFetchSamplingProfiles } from "@/hooks/query_hooks/useFetchSamplingProfiles";
import { Skeleton } from "@/components/ui/skeleton";
import { usePromptComposerContext } from "./providers/prompt-composer-context";
import { useEffect } from "react";
import { Controller, useFormState } from "react-hook-form";
import { PromptComposerFormSchema } from "./dto/prompt.zod";
import { Field, FieldGroup } from "@/components/ui/field";
import { toast } from "sonner";
import TokenCounts from "./components/token-counts";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
import { useQueryClient } from "@tanstack/react-query";
import { PROMPTS_KEY } from "@/hooks/query_hooks/query_keys";
export default function PromptComposer() {
  const { form, mutation } = usePromptComposerContext();
  const { isLoading, samplingProfiles } = useFetchSamplingProfiles();
  const { errors, isSubmitting } = useFormState({
    control: form.control,
  });
  const queryClient = useQueryClient()
  const router = useRouter();
  useEffect(() => {
    if (errors.prompt) {
      toast.error(errors.prompt.message);
    } else if (errors.model) {
      toast.error(errors.model.message);
    } else if (errors.samplingProfiles) {
      toast.error(errors.samplingProfiles.message);
    }
  }, [errors]);
  const { mutateAsync, isPending, isError, error } = mutation;
  const _onHandlePromptSubmit = async (values: PromptComposerFormSchema) => {
    const { status, data } = await mutateAsync(values);
    console.log(data);
    if (status === 201) {
      await queryClient.refetchQueries({
        queryKey: [PROMPTS_KEY]
      })
      toast.success("Prompt submitted successfully");
      router.push(`/prompt/${data?.id}`);
    }
    if (isError && isAxiosError(error)) {
      toast.error(
        "We're having trouble processing your request. Please try again."
      );
    }
  };
  return (
    <div className="flex flex-col gap-2 w-full md:min-w-[60dvw] md:max-w-[60dvw]">
      {isLoading ? (
        <Skeleton className="size-8 rounded-full" />
      ) : (
        <SamplingProfileContextProvider
          createOnly={false}
          profiles={samplingProfiles}
        >
          <SamplingProfileSection />
        </SamplingProfileContextProvider>
      )}
      <form
        onSubmit={form.handleSubmit(_onHandlePromptSubmit)}
        className="flex flex-col gap-4 min-w-full"
        id="prompt-composer-form"
      >
        <FieldGroup>
          <InputGroup className="flex flex-1 border-2 border-muted-foreground/20 rounded-xl">
            <Controller
              control={form.control}
              name="prompt"
              render={({ field, fieldState }) => (
                <Field>
                  <InputGroupTextarea
                    className="focus-visible:border-none !focus-visible:ring-0 text-sm placeholder:text-shadow-2xs"
                    placeholder="What would you like to analyze? Type your prompt to get started"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                </Field>
              )}
            />
            <InputGroupAddon align="block-end">
              <ModelSelector />
              <TokenCounts />
              <Separator orientation="vertical" className="!h-4" />
              <InputGroupButton
                variant="default"
                className="rounded-full"
                size="icon-sm"
                disabled={
                  form.watch("prompt").trim() === "" ||
                  isSubmitting ||
                  isPending
                }
                type="submit"
                form="prompt-composer-form"
              >
                {isSubmitting || isLoading ? <Spinner /> : <ArrowUpIcon />}
                <span className="sr-only">Send</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </FieldGroup>
      </form>
    </div>
  );
}
