"use client";

import { MoreHorizontal } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useFetchAllPrompts } from "@/hooks/query_hooks/useFetchAllPrompts";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
export function PromptsNav() {
  const { prompts, isLoading, hasNextPage, isFetchingNextPage } =
    useFetchAllPrompts();
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Prompts & Insights</SidebarGroupLabel>
      <SidebarMenu>
        {isLoading ? <Skeleton className="h-9 w-full rounded-md" /> : null}
        {prompts.map((prompt) => (
          <SidebarMenuItem key={prompt.id}>
            <SidebarMenuButton asChild>
              <Link href={`/prompt/${prompt.id}`}>
                <span className="truncate text-sm">{prompt.prompt}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        {hasNextPage ? (
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              {isFetchingNextPage ? <Spinner /> : <MoreHorizontal />}
              <span>{isFetchingNextPage ? "Loading" : "More"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ) : null}
      </SidebarMenu>
    </SidebarGroup>
  );
}
