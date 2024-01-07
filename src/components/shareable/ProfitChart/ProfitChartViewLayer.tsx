import { DropDownIcon } from "@/custom-icons";
import { styles } from "@/styles/tailwind/ProfitChartViewLayer/index.css";
import { ApexOptions } from "apexcharts";
import dynamic from 'next/dynamic';
import { ProfitChartProps } from '.';
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type ProfitChartViewLayerProps = {
    options: ApexOptions;
    series: ProfitChartProps;
}

export default function ProfitChartViewLayer({ options, series }: ProfitChartViewLayerProps) {
    return (
        <div className={`${styles.profitChartWrapper}`}>
            <div className={`${styles.profitChartHeadingWrapper}`}>
                <div>
                    <h4 className={`${styles.heading}`}>
                        Profit this week
                    </h4>
                </div>
                <div>
                    <div className={`${styles.selectBoxWrapper}`}>
                        <select
                            name="#"
                            id="#"
                            className={`${styles.selectBox}`}
                        >
                            <option value="">This Week</option>
                            <option value="">Last Week</option>
                        </select>
                        <span className={`${styles.dropdownIconWrapper}`}>
                            <DropDownIcon />
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <div id="chartTwo" className="-ml-5 -mb-9">
                    <ApexCharts
                        options={options}
                        series={series.series}
                        type="bar"
                        height={350}
                        width="100%"
                    />
                </div>
            </div>
        </div>
    )
}
