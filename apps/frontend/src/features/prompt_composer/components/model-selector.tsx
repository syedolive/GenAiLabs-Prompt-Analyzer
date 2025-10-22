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
import { usePromptComposerContext } from "../providers/prompt-composer-context";

export function ModelSelector() {
  const [open, setOpen] = React.useState(false);
  const { models, form } = usePromptComposerContext();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          size="sm"
          className="w-[150px] justify-between text-xs px-1 border-none shadow-none"
        >
          <span className="truncate">
            {form.getValues('model')
              ? models.find((m) => m.id === form.getValues('model'))?.name
              : "Select Model..."}
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Model..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {models.map((model) => (
                <CommandItem
                  key={model.id}
                  value={model.id}
                  onSelect={(currentValue) => {
                    form.setValue("model", currentValue === form.getValues("model") ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {model.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      form.getValues("model") === model.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
