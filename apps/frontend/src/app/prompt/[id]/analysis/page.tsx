import {ChartBarMultiple} from "@/components/charts/bar-chart";
import {ChartRadarLegend} from "@/components/charts/radar-chart-multiple";

export default function Analysis() {
    return(
        <div className="grid flex-1 grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
                <ChartBarMultiple/>
            </div>
            <div className="col-span-1">
                <ChartRadarLegend/>
            </div>
        </div>
    )
}