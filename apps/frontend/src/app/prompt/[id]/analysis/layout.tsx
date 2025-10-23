"use client";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExportComponent } from "@/features/metrics/export";

type TabsValue =
  | "completeness"
  | "length-appropriateness"
  | "structural-pattern"
  | "coherence";

type Tab = {
  value: TabsValue;
  label: string;
  href: (base: string) => string;
};

const tabs: Array<Tab> = [
  {
    value: "completeness",
    label: "Completeness",
    href: (base: string) => base,
  },
  {
    value: "length-appropriateness",
    label: "Length Appropriateness",
    href: (base: string) => `${base}/length-appropriateness`,
  },
  // {value: "structural-pattern", label: "Structural Pattern", href: (base: string) => `${base}/structural-pattern`},
];

export default function AnalysisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment() as TabsValue | null;
  const currentTab = (segment ?? "completeness") as TabsValue;
  const params = useParams<{ id: string }>();
  const location = `/prompt/${params.id}/analysis`;
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex flex-col md:flex-row w-full gap-2 items-center md:justify-between">
        <Tabs
          value={currentTab}
          onValueChange={() => {}}
          className="w-full md:w-[400px]"
        >
          <TabsList className="w-full md:w-[400px]">
            {tabs.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.value} asChild>
                <Link href={tab.href(location)}>{tab.label}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <ExportComponent>
          <Button size="sm" className="w-full md:w-[200px]">
            Export
          </Button>
        </ExportComponent>
      </div>
      <div className="flex flex-1 w-full">{children}</div>
    </div>
  );
}
