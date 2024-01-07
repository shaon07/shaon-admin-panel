"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import VisitorChartViewLayer from "./visitorChartViewLayer";

export type VisitorChartState = {
    series: number[];
}

const options: ApexOptions = {
    chart: {
        type: "donut",
    },
    colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
    labels: ["Remote", "Hybrid", "Onsite", "Leave"],
    legend: {
        show: true,
        position: "bottom",
    },

    plotOptions: {
        pie: {
            donut: {
                size: "65%",
                background: "transparent",
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380,
                },
            },
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200,
                },
            },
        },
    ],
};

const VisitorChart: React.FC = () => {
    const [state, setState] = useState<VisitorChartState>({
        series: [65, 34, 12, 56],
    });

    return <VisitorChartViewLayer options={options} series={state} />
};

export default VisitorChart;
