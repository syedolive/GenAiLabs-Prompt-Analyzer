import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateProfileForm } from "./components/create-profile-form";
import { memo, useCallback, useState } from "react";
import { SampleProfileSelector } from "./components/profile-selector";
import { useSamplingProfileContext } from "./providers/sampling-profile-context";

export default function SamplingProfileDialogComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const _close = useCallback(() => setOpen(false), [setOpen]);
  const { createOnly } = useSamplingProfileContext();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-full md:min-w-[50dvw]">
        <DialogHeader>
          <DialogTitle>Sampling Profile</DialogTitle>
          <DialogDescription>
            Define how the model should respond. From creative and open-ended to
            focused and concise.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-1 flex-col gap-2">
          {createOnly ? null : <SampleProfileSelector />}
          <CreateProfileForm onClose={_close} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
export const SamplingProfileDialog = memo(SamplingProfileDialogComponent);
