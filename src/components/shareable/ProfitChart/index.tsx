"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ProfitChartViewLayer from "./ProfitChartViewLayer";


const options: ApexOptions = {
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
        // events: {
        //   beforeMount: (chart) => {
        //     chart.windowResizeHandler();
        //   },
        // },
        fontFamily: "Satoshi, sans-serif",
        type: "bar",
        height: 335,
        stacked: true,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },

    responsive: [
        {
            breakpoint: 1536,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        columnWidth: "25%",
                    },
                },
            },
        },
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: "25%",
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last",
        },
    },
    dataLabels: {
        enabled: false,
    },

    xaxis: {
        categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Satoshi",
        fontWeight: 500,
        fontSize: "14px",

        markers: {
            radius: 99,
        },
    },
    fill: {
        opacity: 1,
    },
};

export type ProfitChartProps = {
    series: {
        name: string;
        data: number[];
    }[];
}

const ProfitChart: React.FC = () => {
    const [state, setState] = useState<ProfitChartProps>({
        series: [
            {
                name: "Sales",
                data: [44, 55, 41, 67, 22, 43, 65],
            },
            {
                name: "Revenue",
                data: [13, 23, 20, 8, 13, 27, 15],
            },
        ],
    });

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
        }));
    };
    handleReset;

    return <ProfitChartViewLayer options={options} series={state} />
};

export default ProfitChart;
