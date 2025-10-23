import { ChartBarHorizontal } from "@/components/charts/bar-chart-horizontal";
import { ChartBarDefault } from "@/components/charts/bar-chart-single";
import { ChartLineLabel } from "@/components/charts/line-chart-label";
import { ChartLineMultiple } from "@/components/charts/line-chart-multiple";
import { LengthAppropriatenessPageComponent } from "@/features/metrics/length-appropriateness/components/page";
import { LengthAppContextProvider } from "@/features/metrics/length-appropriateness/providers/length-app-context";
import { getPromptLengthMetrics } from "@/lib/network";

type Params = Promise<{ id: string }>;

export default async function LengthAppropriatenessPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  console.log(id);
  const {data} = await getPromptLengthMetrics(id);
  return (
    <div className="flex flex-1 flex-col p-2 gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold text-center md:text-left">
          Length Appropriateness
        </h1>
        <p className="text-sm text-center md:text-left">
          Understand how your model responds in terms of clarity and balance.
          Explore token usage, sentence flow, and the relationship between
          prompt and response to ensure every output feels natural, concise, and
          consistent across models.
        </p>
      </div>
      <LengthAppContextProvider metrics={data}>
        <LengthAppropriatenessPageComponent />
      </LengthAppContextProvider>
    </div>
  );
}
