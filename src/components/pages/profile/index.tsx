
import BreadCrumb from "@/components/ui/pages/calender/breadCrumb";
import CoverPhotoCard from "@/components/ui/pages/profile/coverPhotoCard";
import ProfileDetail from "@/components/ui/pages/profile/profileDetail";
import ProfilePhoto from "@/components/ui/pages/profile/profilePhoto";
import { styles } from "@/styles/tailwind/ProfilePageViewLayer/index.css";


const ProfilePageViewLayer = () => {
    return (
        <>
            <BreadCrumb title="Profile" />

            <div className={`${styles.profilePageViewLayerWrapper}`}>
                <CoverPhotoCard />

                <div className={`${styles.detailWrapper}`}>
                    <div className={`${styles.detailContent}`}>
                        <ProfilePhoto />
                    </div>

                    <ProfileDetail />
                </div>
            </div>
        </>
    );
};

export default ProfilePageViewLayer;
