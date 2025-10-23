"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  ChartsDefaultProps,
  TBarChartHorizontal,
} from "@/features/metrics/length-appropriateness/dto/charts.dto";

export function ChartBarHorizontal({
  title,
  description,
  chartConfig,
  chartData,
  extraDescription,
}: ChartsDefaultProps & TBarChartHorizontal) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="xAxisValue" hide />
            <YAxis
              dataKey="yAxisKey"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="xAxisValue" fill="var(--primary)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {extraDescription}
        </div>
        <div className="text-muted-foreground leading-none text-xs">{description}</div>
      </CardFooter>
    </Card>
  );
}
