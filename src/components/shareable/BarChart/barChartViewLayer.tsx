import { styles } from '@/styles/tailwind/barChart/index.css';
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type BarChartViewLayerProps = {
    options: ApexOptions;
    series: any;
}

export default function BarChartViewLayer({ options, series }: BarChartViewLayerProps) {
    return (
        <div className={`${styles.container}`}>
            <div>
                <h3 className={`${styles.heading}`}>
                    Visitors Analytics
                </h3>
            </div>

            <div className="mb-2 h-[22rem]">
                <div id="chartFour" className="">
                    <ApexCharts
                        options={options}
                        series={series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>
        </div>
    )
}
