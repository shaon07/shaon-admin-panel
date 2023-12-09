import { styles } from '@/styles/tailwind/salesAndRevenueViewLayer/index.css';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { ChartOneState } from '.';
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

type SalesAndRevenueViewLayerProps = {
    options: ApexOptions;
    series: ChartOneState
}

export default function SalesAndRevenueViewLayer({ options, series }: SalesAndRevenueViewLayerProps) {
    return (
        <div className={`${styles.salesAndRevenueWrapper}`}>
            <div className={`${styles.salesAndRevenueHeaderWrapper}`}>
                <div className={`${styles.salesAndRevenueHeadingLeftContentWrapper}`}>
                    <div className="flex min-w-47.5">
                        <span className={`${styles.dotWrapper} border-primary`}>
                            <span className={`${styles.revenueDot} bg-primary`}></span>
                        </span>

                        <div className="w-full">
                            <p className="font-semibold text-primary">Total Revenue</p>
                            <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>

                    <div className="flex min-w-47.5">
                        <span className={`${styles.dotWrapper} border-secondary`}>
                            <span className={`${styles.revenueDot} bg-secondary`}></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-secondary">Total Sales</p>
                            <p className="text-sm font-medium">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                </div>

                <div className={`${styles.filterWrapper}`}>
                    <div className={`${styles.filterContentWrapper}`}>
                        <button className={`${styles.filterButtonActive}`}>
                            Day
                        </button>
                        <button className={`${styles.filterButton}`}>
                            Week
                        </button>
                        <button className={`${styles.filterButton}`}>
                            Month
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
                    <ReactApexChart
                        options={options}
                        series={series.series}
                        type="area"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    )
}
