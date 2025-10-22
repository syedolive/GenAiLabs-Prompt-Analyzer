import { IconFolderCode } from "@tabler/icons-react";
import { ArrowUpRightIcon, ChartPie } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export function HeroSection() {
  return (
    <Empty className="w-full">
      <EmptyHeader className="max-w-md md:max-w-2xl">
        <EmptyMedia variant="icon">
          <ChartPie />
        </EmptyMedia>
        <EmptyTitle>Explore the Art of Prompt Engineering</EmptyTitle>
        <EmptyDescription>
          See how small changes in your prompts transform the behavior and quality of LLM responses.
Experiment with parameters like temperature, top-p, and max output tokens and discover how each affects creativity, coherence, and completeness.
        </EmptyDescription>
      </EmptyHeader>
      {/* <EmptyContent>
        <div className="flex gap-2">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </div>
      </EmptyContent> */}
    </Empty>
  );
}
