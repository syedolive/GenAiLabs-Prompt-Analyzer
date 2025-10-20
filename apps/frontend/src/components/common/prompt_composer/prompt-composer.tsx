"use client";

import SamplingProfile from "@/components/sampling_profiles/modals/sampling-profile";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { InputGroup, InputGroupTextarea, InputGroupAddon, InputGroupButton, InputGroupText } from "@/components/ui/input-group";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { IconX, IconPlus } from "@tabler/icons-react";
import { Paperclip, ArrowUpIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PromptComposer() {
  return (
    <div className="flex flex-col gap-3 w-full md:min-w-[60dvw] md:max-w-[60dvw]">
       <h2 className="font-bold text-center">Start your analysis</h2>
        <div className="flex flex-col gap-4 min-w-full">
            <InputGroup className="flex flex-1 border-muted-foreground/20 rounded-xl">
                <InputGroupTextarea className="focus-visible:border-none !focus-visible:ring-0 text-sm placeholder:text-shadow-2xs" placeholder="What would you like to analyze? Type your prompt to get started" />
                <InputGroupAddon align="block-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <InputGroupButton size="icon-sm" className="text-xs rounded-full" variant="secondary"><Paperclip/></InputGroupButton>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            align="start"
                            className="rounded-md border-0 bg-background p-1 px-2 shadow-md"
                        >
                            <DropdownMenuItem className="text-xs font-medium">Import JSON</DropdownMenuItem>
                            <DropdownMenuItem className="text-xs font-medium">Import CSV</DropdownMenuItem>
                            <Separator/>
                            <DropdownMenuItem className="text-xs font-medium">Download Samples</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <InputGroupText className="ml-auto">52 tokens</InputGroupText>
                    <Separator orientation="vertical" className="!h-4" />
                    <InputGroupButton
                        variant="default"
                        className="rounded-full"
                        size="icon-sm"
                        disabled
                        type="button"
                    >
                        <ArrowUpIcon />
                        <span className="sr-only">Send</span>
                    </InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
            <div className="flex flex-col gap-2">
                <span className="text-xs font-medium">Sampling Profiles:</span>
                <div className="flex flex-row flex-wrap gap-2 items-center">
                    <ButtonGroup className="rounded-full">
                        <Button variant="secondary" size="sm" className="rounded-full text-xs">Default Profile</Button>
                        <Button variant="secondary" size="icon-sm" className="rounded-full text-xs"><IconX/></Button>
                    </ButtonGroup>
                    <SamplingProfile><Button variant="outline" size="icon-sm" className="rounded-full text-xs"><IconPlus/></Button></SamplingProfile>
                </div>
            </div>
        </div>
    </div>
  );
}