import BreadCrumb from '@/components/ui/pages/calender/breadCrumb'
import ChannelListTable from '@/views/common/ChannelListTable'
import TopPackageTable from '@/views/common/TopPackageTable'
import TopProductTable from '@/views/common/topProductTable'

export default function TablesViewLayer() {
    return (
        <>
            <BreadCrumb title="Tables" />

            <div className="flex flex-col gap-10">
                <ChannelListTable />
                <TopProductTable />
                <TopPackageTable />
            </div>
        </>
    )
}
