import ProfitChart from "@/components/shareable/ProfitChart";
import SalesAndRevenueChart from "@/components/shareable/SalesAndRevenueChart";
import VisitorChart from "@/components/shareable/VisitorChart";
import { styles } from "@/styles/tailwind/chartsContainer/index.css";

export default function ChartsContainer() {
    return (
        <div className={`${styles.chartsContainerWrapper}`}>
            <SalesAndRevenueChart />
            <ProfitChart />
            <VisitorChart />
            {/* <MapOne /> */}
            <div className={`${styles.chartsContainerInner}`}>
                {/* <TableOne /> */}
            </div>
            {/* <ChatCard /> */}
        </div>
    )
}
