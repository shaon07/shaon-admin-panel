import { DropDownIcon } from "@/custom-icons";
import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/VisitorChart/index.css";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { VisitorChartState } from '.';
import { deviceData } from "../../../resources/visitorChart/deviceData";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

type VisitorChartViewLayerProps = {
    options: ApexOptions;
    series: VisitorChartState;
}

export default function VisitorChartViewLayer({ options, series }: VisitorChartViewLayerProps) {
    return (
        <div className={`${styles.visitorChartWrapper}`}>
            <div className={`${styles.visitorChartHeadingWrapper}`}>
                <div>
                    <h5 className={`${styles.heading}`}>
                        Visitors Analytics
                    </h5>
                </div>
                <div>
                    <div className={`${styles.selectBoxWrapper}`}>
                        <select
                            name=""
                            id=""
                            className={`${styles.selectBox}`}
                        >
                            <option value="">Monthly</option>
                            <option value="">Yearly</option>
                        </select>
                        <span className={`${styles.dropdownWrapper}`}>
                            <DropDownIcon />
                        </span>
                    </div>
                </div>
            </div>

            <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center">
                    <ReactApexChart
                        options={options}
                        series={series.series}
                        type="donut"
                        width={500}
                        height={300}
                    />
                </div>
            </div>

            <div className={`${styles.deviceListWrapper}`}>
                {
                    checkArray(deviceData) && deviceData.map((device: any) => {
                        return (
                            <div key={device.id} className={`${styles.deviceListContent}`}>
                                <div className={`${styles.contentWrapper}`}>
                                    <span className={`${styles.deviceListDot}`}></span>
                                    <p className={`${styles.deviceListDataWrapper}`}>
                                        <span> {device.name} </span>
                                        <span> {device.data}% </span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
