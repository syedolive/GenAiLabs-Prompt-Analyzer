"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { memo } from "react";

function CustomPopoverComponent({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent>{children}</PopoverContent>
      </Popover>
    );
  }
  return (
    <Tooltip>
      <TooltipTrigger type="button" asChild>{trigger}</TooltipTrigger>
      <TooltipContent>{children}</TooltipContent>
    </Tooltip>
  );
}

export const CustomPopover = memo(CustomPopoverComponent);
