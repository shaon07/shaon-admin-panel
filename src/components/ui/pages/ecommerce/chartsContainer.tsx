import ChatList from "@/components/shareable/ChatList";
import ProfitChart from "@/components/shareable/ProfitChart";
import SalesAndRevenueChart from "@/components/shareable/SalesAndRevenueChart";
import VisitorChart from "@/components/shareable/VisitorChart";
import { styles } from "@/styles/tailwind/chartsContainer/index.css";
import ChannelListTable from "@/views/common/ChannelListTable";
import dynamic from "next/dynamic";
const MapChart = dynamic(() => import("../../../shareable/MapChart"), {
    ssr: false,
});

export default function ChartsContainer() {
    return (
        <div className={`${styles.chartsContainerWrapper}`}>
            <SalesAndRevenueChart />
            <ProfitChart />
            <VisitorChart />
            <MapChart />
            <div className={`${styles.chartsContainerInner}`}>
                <ChannelListTable />
            </div>
            <ChatList />
        </div>
    )
}
