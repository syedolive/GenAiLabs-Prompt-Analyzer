import { ChartConfig } from "@/components/ui/chart";

export type ChartsDefaultProps = {
  title: string;
  description: string;
};

export type TBarChartSingle = {
  chartData: Array<Record<string, number | string>>;
  chartConfig: ChartConfig;
  extraDescription?: string;
};

export type TBarChartHorizontal = TBarChartSingle;
export type TLineChartLabel = TBarChartHorizontal;
export type TLineChartMultiple = TBarChartHorizontal;