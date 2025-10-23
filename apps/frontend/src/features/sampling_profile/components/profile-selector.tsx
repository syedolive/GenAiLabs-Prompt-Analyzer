"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSamplingProfileContext } from "../providers/sampling-profile-context";
import { IconPlus } from "@tabler/icons-react";

export function SampleProfileSelector() {
  const [open, setOpen] = React.useState(false);
  const { profiles, setProfile, selectedProfile, form } =
    useSamplingProfileContext();

  const _onSelect = (id: string) => {
    setProfile(id === selectedProfile?.id ? "" : id);
    setOpen(false);
    const profile = profiles.find((profile) => profile?.id === id);
    if (profile !== undefined) {
      form.setValue("profileName", profile.profile_name);
      form.setValue("topK", profile.top_k);
      form.setValue("topP", profile.top_p);
      form.setValue("temperature", profile.temperature);
    }
  };
  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedProfile !== null
            ? profiles.find((profile) => profile?.id === selectedProfile.id)
                ?.profile_name
            : "Choose a saved profile"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-50">
        <Command>
          <CommandInput placeholder="Search profiles..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {profiles.map((profile) => (
                <CommandItem
                  key={profile.id}
                  value={profile.id}
                  onSelect={_onSelect}
                >
                  {profile.profile_name}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedProfile?.id === profile.id
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
              <CommandItem
                value={""}
                onSelect={(currentValue) => {
                  setProfile(null);
                  setOpen(false);
                  form.reset();
                }}
              >
                <div className="flex flex-row items-center gap-2">
                  <IconPlus />{" "}
                  <span className="text-sm font-bold">Create New</span>
                </div>
                <Check
                  className={cn(
                    "ml-auto",
                    selectedProfile === null ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
