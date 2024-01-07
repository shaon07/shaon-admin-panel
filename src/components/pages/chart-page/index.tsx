import BarChart from "@/components/shareable/BarChart";
import BreadCrumb from "@/components/ui/pages/calender/breadCrumb";

export default function ChartPageViewLayers() {
    return (
        <div>
            <BreadCrumb title="Chart" />

            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                <div className="col-span-12">
                    {/* <ChartFour /> */}
                    <BarChart />
                </div>
            </div>
            {/* <VisitorChart /> */}
        </div>
    )
}
