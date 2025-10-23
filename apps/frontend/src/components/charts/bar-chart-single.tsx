"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
import { ChartsDefaultProps, TBarChartSingle } from "@/features/metrics/length-appropriateness/dto/charts.dto";

export function ChartBarDefault({ title, description,  chartData, chartConfig, extraDescription}: ChartsDefaultProps & TBarChartSingle) {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title || "Bar Chart"}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="xAxisKey"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="yAxisValue" fill="var(--primary)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          {extraDescription}
        </div>
        <div className="text-muted-foreground leading-none text-xs">
          {description}
        </div>
      </CardFooter>
    </Card>
  );
}
