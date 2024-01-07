import { checkArray } from '@/helpers'
import { ecommerceStatsData, ecommerceStatsDataTypes } from '@/resources/ecommercePageData/statsData'
import { styles } from '@/styles/tailwind/statsContainer/index.css'
import CardDataStats from '@/views/common/CardDataStats'

export default function StatsContainer() {
    return (
        <div className={`${styles.statsContainerWrapper}`}>
            {
                checkArray(ecommerceStatsData) && ecommerceStatsData.map((states: ecommerceStatsDataTypes) => {
                    return (
                        <CardDataStats key={states.id} title={states.title} total={states.total} rate={states.rate} levelStatus={states.levelStatus}>
                            {states.icon}
                        </CardDataStats>
                    )
                })
            }

        </div>
    )
}
