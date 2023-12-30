import BreadCrumb from "@/components/ui/pages/calender/breadCrumb";
import PersonalInformation from "@/views/common/personalInformation";
import PhotoLoader from "@/views/common/photoLoader";

export default function SettingsViewLayer() {
    return (
        <div className="mx-auto max-w-270">
            <BreadCrumb title="Settings" />

            <div className="grid grid-cols-5 gap-8">
                <PersonalInformation />
                <PhotoLoader />
            </div>
        </div>
    )
}
