"use client";

import * as React from "react";
import { BrainCog, CirclePlus, SearchIcon } from "lucide-react";

import { PromptsNav } from "@/components/layouts/app_layout/prompt-insights";
import { NavMain } from "@/components/layouts/app_layout/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Create New",
      url: "/",
      icon: CirclePlus,
    },
    // {
    //   title: "Sampling Profiles",
    //   url: "#",
    //   icon: BrainCog,
    // },
    {
      title: "Search",
      url: "#",
      icon: SearchIcon,
      isActive: true,
    },
  ],
  navSecondary: [],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="h-8 w-8 ml-2" />
        </Link>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <PromptsNav />
        {/* <ExperimentsNav experiments={data.experiments} /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
