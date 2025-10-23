"use client";
import { ChartBarHorizontal } from "@/components/charts/bar-chart-horizontal";
import { ChartBarDefault } from "@/components/charts/bar-chart-single";
import { ChartLineLabel } from "@/components/charts/line-chart-label";
import { useLengthAppContext } from "../providers/length-app-context";

export function LengthAppropriatenessPageComponent() {
  const { tokenCount, sentenceCount, avgSentenceLength } =
    useLengthAppContext();
  return (
    <div className="grid flex-1 grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-1">
        <ChartBarDefault
          title="Token Usage"
          description="Shows how many tokens the model used to generate the response."
          chartData={tokenCount.chartData}
          chartConfig={tokenCount.chartConfig}
          extraDescription={tokenCount.extraDescription}
        />
      </div>
      <div className="col-span-1">
        <ChartBarHorizontal
          title="Sentence Count"
          description="Indicates how many sentences are present, revealing verbosity and structure."
          chartData={sentenceCount.chartData}
          chartConfig={sentenceCount.chartConfig}
          extraDescription={sentenceCount.extraDescription}
        />
      </div>
      <div className="col-span-1">
        <ChartLineLabel
          title="Average Sentence Length"
          description="Measures how long each sentence is on average, reflecting flow and readability."
          chartConfig={avgSentenceLength.chartConfig}
          extraDescription={avgSentenceLength.extraDescription}
          chartData={avgSentenceLength.chartData}
        />
      </div>
      {/* <div className="col-span-1">
        <ChartLineMultiple
          title="Response-to-Prompt Ratio"
          description="Compares the length of the response to the prompt to reveal whether the output is proportionate or overly long."
          chartConfig={responseToPromptRatio.chartConfig}
          extraDescription={responseToPromptRatio.extraDescription}
          chartData={responseToPromptRatio.chartData}
        />
      </div> */}
    </div>
  );
}
