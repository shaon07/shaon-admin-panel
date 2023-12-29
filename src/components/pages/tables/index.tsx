import ChannelListTable from '@/components/shareable/ChannelListTable'
import BreadCrumb from '@/components/ui/pages/calender/breadCrumb'

export default function TablesViewLayer() {
    return (
        <>
            <BreadCrumb title="Tables" />

            <div className="flex flex-col gap-10">
                <ChannelListTable />
            </div>
        </>
    )
}
