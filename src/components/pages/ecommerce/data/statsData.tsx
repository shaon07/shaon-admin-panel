import { TotalProductIcon, TotalProfit, TotalUsers, TotalViewsIcon } from "@/custom-icons";

export type ecommerceStatsDataTypes = {
    id: number;
    title: string;
    total: string;
    rate: string;
    levelStatus: boolean;
    icon: JSX.Element;
}

export const ecommerceStatsData: ecommerceStatsDataTypes[] = [
    {
        id: 1,
        title: "Total views",
        total: "$3.456K",
        rate: "0.43%",
        levelStatus: true,
        icon: <TotalViewsIcon />
    },
    {
        id: 2,
        title: "Total Profit",
        total: "$45,2K",
        rate: "4.35%",
        levelStatus: true,
        icon: <TotalProfit />
    },
    {
        id: 3,
        title: "Total Product",
        total: "2.450",
        rate: "2.59%",
        levelStatus: true,
        icon: <TotalProductIcon />
    },
    {
        id: 4,
        title: "Total Users",
        total: "3.456",
        rate: "0.95%",
        levelStatus: false,
        icon: <TotalUsers />
    }
]