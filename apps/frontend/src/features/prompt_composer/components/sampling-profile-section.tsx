import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import SamplingProfileDialog from "@/features/sampling_profile";
import { IconX } from "@tabler/icons-react";
import { memo, useMemo } from "react";
import { usePromptComposerContext } from "../providers/prompt-composer-context";
import { useSamplingProfileContext } from "@/features/sampling_profile/providers/sampling-profile-context";
import { CogIcon } from "lucide-react";

export default function SamplingProfileSectionComponent() {
  const { form } = usePromptComposerContext();
  const { profiles } = useSamplingProfileContext();
  const selectedProfiles = useMemo(() => {
    return profiles.filter((p) =>
      form.getValues("samplingProfiles").includes(p.id)
    );
  }, [form.watch("samplingProfiles")]);
  return (
    <div className="flex flex-row flex-wrap items-center gap-3 h-11 px-2">
      {selectedProfiles.map((profile) => (
        <ButtonGroup key={profile.id}>
          <Button
            variant="secondary"
            size="sm"
            className="rounded-full text-xs"
          >
            {profile.profile_name}
          </Button>
          <Button
            variant="secondary"
            size="icon-sm"
            className="rounded-full text-xs"
          >
            <IconX />
          </Button>
        </ButtonGroup>
      ))}
      {selectedProfiles.length <= 2 ? (
        <SamplingProfileDialog>
          <Button
            variant="secondary"
            size="icon-sm"
            className="rounded-full text-xs"
          >
            <CogIcon />
          </Button>
        </SamplingProfileDialog>
      ) : null}
    </div>
  );
}
export const SamplingProfileSection = memo(SamplingProfileSectionComponent);
