"use client";

import { IconInfoCircle } from "@tabler/icons-react";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { useSamplingProfileContext } from "../providers/sampling-profile-context";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { SampleProfileFromSchema } from "../dto/sampling-profile.dto";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { memo } from "react";
import { usePromptComposerContext } from "@/features/prompt_composer/providers/prompt-composer-context";
import { useIsMutating, useQueryClient } from "@tanstack/react-query";
import { CREATE_SAMPLING_PROFILE_KEY } from "@/hooks/query_hooks/query_keys";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { CustomPopover } from "@/components/common/custom-popover";
export function CreateProfileFormComponent({
  onClose,
}: {
  onClose: () => void;
}) {
  const { form, submit, reset, selectedProfile, setProfile, createOnly } =
    useSamplingProfileContext();
  const { form: promptForm } = usePromptComposerContext();
  const query = useQueryClient();
  const isLoading = useIsMutating({
    mutationKey: [CREATE_SAMPLING_PROFILE_KEY],
  });

  const _onHandleSubmit = async (values: SampleProfileFromSchema) => {
    if (selectedProfile !== null) {
      _selectProfile(selectedProfile.id);
      reset();
      onClose();
      setProfile(null);
      return;
    }
    const response = await submit(values);
    if (response.status === 201) {
      toast.success("Your sampler profile is ready to use");
      if (!createOnly) {
        await query.refetchQueries({
          queryKey: [CREATE_SAMPLING_PROFILE_KEY],
        });
        _selectProfile(response.data.id);
        setProfile(null);
      }
      reset();
      onClose();
    }
  };
  const _selectProfile = (id: string) => {
    const currentValue = promptForm.getValues("samplingProfiles");
    if (currentValue.includes(id)) {
      return;
    }
    promptForm.setValue("samplingProfiles", [
      ...promptForm.getValues("samplingProfiles"),
      id,
    ]);
  };
  return (
    <form
      onSubmit={form.handleSubmit(_onHandleSubmit)}
      className="flex flex-col gap-2"
    >
      <div className="flex flex-1 flex-col border border-muted-foreground/20 rounded-md">
        <FieldGroup className="gap-1">
          <Controller
            name="profileName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex min-w-full p-2 flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex flex-1 flex-row md:items-center gap-1">
                    <FieldLabel className="text-sm">Profile Name</FieldLabel>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <Input
                      className="shadow-none border-accent-foreground"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Ex: Creative Writer"
                      readOnly={selectedProfile !== null}
                      disabled={selectedProfile !== null}
                    />
                    {fieldState.invalid ? (
                      <FieldError
                        className="text-xs"
                        errors={[fieldState.error]}
                      />
                    ) : null}
                  </div>
                </div>
              </Field>
            )}
          />
          <Separator />
          <Controller
            name="temperature"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex min-w-full p-2 flex-col md:flex-row md:items-center gap-2">
                  <div className="flex flex-1 flex-row md:items-center gap-1">
                    <FieldLabel className="text-sm">Temperature</FieldLabel>
                    <CustomPopover
                      trigger={
                        <IconInfoCircle className="text-muted-foreground" />
                      }
                    >
                      <span>
                        Higher values make responses more imaginative. Lower
                        values make them more focused and predictable.
                      </span>
                    </CustomPopover>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center border border-muted-foreground/20 rounded-md p-2">
                    <span className="text-xs">{field.value}</span>
                    <Slider
                      value={[field.value]}
                      onValueChange={(number) =>
                        form.setValue("temperature", number[0])
                      }
                      max={1}
                      min={0}
                      step={0.1}
                      disabled={selectedProfile !== null}
                    />
                  </div>
                </div>
              </Field>
            )}
          />
          <Separator />
          <Controller
            name="topP"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex min-w-full p-2 flex-col md:flex-row md:items-center gap-2">
                  <div className="flex flex-1 flex-row md:items-center gap-1">
                    <FieldLabel className="text-sm">TopP</FieldLabel>
                    <CustomPopover
                      trigger={
                        <IconInfoCircle className="text-muted-foreground" />
                      }
                    >
                      <span>
                        Controls how much cumulative probability mass is
                        considered when sampling tokens. Lower values produce
                        safer, more deterministic responses; higher values add
                        more variety.
                      </span>
                    </CustomPopover>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center border border-muted-foreground/20 rounded-md p-2">
                    <span className="text-xs">{field.value}</span>
                    <Slider
                      value={[field.value]}
                      onValueChange={(number) =>
                        form.setValue("topP", number[0])
                      }
                      max={1}
                      min={0}
                      step={0.5}
                      disabled={selectedProfile !== null}
                    />
                  </div>
                </div>
              </Field>
            )}
          />
          <Separator />
          <Controller
            name="topK"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex min-w-full p-2 flex-col md:flex-row md:items-center gap-2">
                  <div className="flex flex-1 flex-row md:items-center gap-1">
                    <FieldLabel className="text-sm">TopK</FieldLabel>
                    <CustomPopover
                      trigger={
                        <IconInfoCircle className="text-muted-foreground" />
                      }
                    >
                      <span>
                        Limits the number of possible next tokens the model can
                        choose from at each step. Smaller values make output
                        more focused, while larger values increase diversity
                      </span>
                    </CustomPopover>
                  </div>
                  <div className="flex flex-1 flex-row gap-2 items-center border border-muted-foreground/20 rounded-md p-2">
                    <span className="text-xs">{field.value}</span>
                    <Slider
                      defaultValue={[1]}
                      value={[field.value]}
                      onValueChange={(number) =>
                        form.setValue("topK", number[0])
                      }
                      max={64}
                      min={1}
                      step={1}
                      disabled={selectedProfile !== null}
                    />
                  </div>
                </div>
              </Field>
            )}
          />
        </FieldGroup>
      </div>
      <DialogFooter>
        <Button
          type="submit"
          className="w-full md:w-50"
          disabled={isLoading > 0}
        >
          {isLoading ? <Spinner /> : null}
          {selectedProfile !== null ? "Select" : "Save"}
        </Button>
      </DialogFooter>
    </form>
  );
}

export const CreateProfileForm = memo(CreateProfileFormComponent);
