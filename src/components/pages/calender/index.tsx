import BreadCrumb from '@/components/ui/pages/calender/breadCrumb'
import Calender from '@/components/ui/pages/calender/calender'

export default function CalenderViewLayer() {
    return (
        <>
            <BreadCrumb title="Calendar" />

            {/* <!-- ====== Calendar Section Start ====== --> */}
            <Calender />
            {/* <!-- ====== Calendar Section End ====== --> */}
        </>
    )
}
