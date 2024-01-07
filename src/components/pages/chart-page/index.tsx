import BarChart from "@/components/shareable/BarChart";
import BreadCrumb from "@/components/ui/pages/calender/breadCrumb";

export default function ChartPageViewLayers() {
    return (
        <div>
            <BreadCrumb title="Chart" />
            <BarChart />
            {/* <VisitorChart /> */}
        </div>
    )
}
