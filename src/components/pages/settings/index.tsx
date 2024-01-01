import BreadCrumb from "@/components/ui/pages/calender/breadCrumb";
import PersonalInformation from "@/views/common/personalInformation";
import PhotoLoader from "@/views/common/photoLoader";

export default function SettingsViewLayer() {
    return (
        <div className="mx-auto max-w-270">
            <BreadCrumb title="Settings" />

            <div className="grid grid-cols-5 gap-8">
                <div className="col-span-5 xl:col-span-3">
                    <PersonalInformation />
                </div>

                <PhotoLoader />
            </div>
        </div>
    )
}
