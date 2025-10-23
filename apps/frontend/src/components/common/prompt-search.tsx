"use client";
import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useParams, useSearchParams, useRouter } from "next/navigation";

export function PromptSearch() {
  const params = useSearchParams();
  const router = useRouter();
  const open = params.has("search");
    console.log(open)
  return (
    <CommandDialog
      open={open !== null}
      onOpenChange={() => params.delete()}
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
