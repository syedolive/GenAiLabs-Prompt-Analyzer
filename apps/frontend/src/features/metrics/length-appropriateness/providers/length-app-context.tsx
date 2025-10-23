"use client";

import { LengthAppropriatenessResponseElement } from "@/lib/network/dto/length-app-metric.dto";
import {
  TBarChartHorizontal,
  TBarChartSingle,
  TLineChartLabel,
  TLineChartMultiple,
} from "../dto/charts.dto";
import { createContext, useContext, useMemo, useState } from "react";

type LengthAppContextValue = {
  metrics: LengthAppropriatenessResponseElement[];
  profileId: string | null;
  setProfileId: (profileId: string | null) => void;
  tokenCount: TBarChartSingle;
  sentenceCount: TBarChartHorizontal;
  avgSentenceLength: TLineChartLabel;
  responseToPromptRatio: TLineChartMultiple;
};

const LengthAppContext = createContext<LengthAppContextValue | null>(null);

export function useLengthAppContext() {
  const context = useContext(LengthAppContext);
  if (context === null) {
    throw new Error(
      "useLengthAppContext must be used within a LengthAppContextProvider"
    );
  }
  return context;
}

type LengthAppContextProviderProps = {
  children: React.ReactNode;
  metrics: LengthAppropriatenessResponseElement[];
};

export const LengthAppContextProvider = ({
  children,
  metrics,
}: LengthAppContextProviderProps) => {
  const [profileId, setProfileId] = useState<string | null>(null);
  const tokenCount: TBarChartSingle = useMemo(() => {
    const avgTokenCount =
      metrics.reduce(
        (acc, metric) => acc + metric.lengthMetrics.response_token_count,
        0
      ) / metrics.length;
    return {
      chartConfig: {
        yAxisValue: {
          label: "Token Counts",
          color: "var(--chart-1)",
        },
      },
      chartData: metrics.map((metric) => ({
        xAxisKey: metric.profile.profile_name,
        yAxisValue: metric.lengthMetrics.response_token_count,
      })),
      extraDescription: `An average of ${avgTokenCount.toFixed(
        2
      )} tokens per response.`,
    };
  }, [metrics]);
  const sentenceCount: TBarChartHorizontal = useMemo(() => {
    const avgSentenceCount =
      metrics.reduce(
        (acc, metric) => acc + metric.lengthMetrics.response_sentence_count,
        0
      ) / metrics.length;
    return {
      chartConfig: {
        xAxisValue: {
          label: "Sentence Counts",
          color: "var(--chart-1)",
        },
      },
      chartData: metrics.map((metric) => ({
        yAxisKey: metric.profile.profile_name,
        xAxisValue: metric.lengthMetrics.response_sentence_count,
      })),
      extraDescription: `An average of ${avgSentenceCount.toFixed(
        2
      )} sentences per response.`,
    };
  }, [metrics]);
  const avgSentenceLength = useMemo(() => {
    const avgSentenceLength =
      metrics.reduce(
        (acc, metric) => acc + Number(metric.lengthMetrics.avg_sentence_length),
        0
      ) / metrics.length;
    return {
      chartConfig: {
        line: {
          label: "Average Sentence Length",
          color: "var(--chart-1)",
        },
      },
      chartData: metrics.map((metric) => ({
        xAxisKey: metric.profile.profile_name,
        line: Number(metric.lengthMetrics.avg_sentence_length),
      })),
      extraDescription: `An average of ${avgSentenceLength.toFixed(
        2
      )} words per sentence.`,
    };
  }, [metrics]);

  const responseToPromptRatio = useMemo(() => {
    const avgRatio =
      metrics.reduce(
        (acc, metric) =>
          acc + Number(metric.lengthMetrics.response_to_prompt_ratio),
        0
      ) / metrics.length;
    return {
      chartConfig: {
        line: {
          label: "Prompt Tokens",
          color: "var(--chart-1)",
        },
        line2: {
          label: "Response Tokens",
          color: "var(--chart-1)",
        },
      },
      chartData: metrics.map((metric) => ({
        xAxisKey: metric.profile.profile_name,
        line: Number(
          parseFloat(metric.lengthMetrics.response_to_prompt_ratio).toFixed(2)
        ),
        line2: Number(
          parseFloat(metric.lengthMetrics.response_to_prompt_ratio).toFixed(2)
        ),
      })),
      extraDescription: `An average of ${avgRatio.toFixed(
        2
      )} response to prompt ratio.`,
    };
  }, [metrics]);
  return (
    <LengthAppContext.Provider
      value={{
        metrics,
        profileId,
        setProfileId,
        tokenCount,
        sentenceCount,
        avgSentenceLength,
        responseToPromptRatio,
      }}
    >
      {children}
    </LengthAppContext.Provider>
  );
};
