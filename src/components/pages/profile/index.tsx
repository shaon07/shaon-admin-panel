import Image from "next/image";

import BreadCrumb from "@/components/ui/pages/calender/breadCrumb";
import CoverPhotoCard from "@/components/ui/pages/profile/coverPhotoCard";
import ProfileDetail from "@/components/ui/pages/profile/profileDetail";
import { ADMIN_IMAGE } from "@/constant";
import { CameraIcon } from "@/custom-icons";
import { styles } from "@/styles/tailwind/ProfilePageViewLayer/index.css";


const ProfilePageViewLayer = () => {
    return (
        <>
            <BreadCrumb title="Profile" />

            <div className={`${styles.profilePageViewLayerWrapper}`}>
                <CoverPhotoCard />

                <div className={`${styles.detailWrapper}`}>
                    <div className={`${styles.detailContent}`}>
                        <div className={`${styles.profilePic}`}>
                            <Image
                                src={ADMIN_IMAGE}
                                width={160}
                                height={160}
                                alt="profile"
                                className="rounded-full object-cover"
                            />
                            <label
                                htmlFor="profile"
                                className={`${styles.profileLabel}`}
                            >
                                <CameraIcon />
                                <input
                                    type="file"
                                    name="profile"
                                    id="profile"
                                    className="sr-only"
                                />
                            </label>
                        </div>
                    </div>

                    <ProfileDetail />
                </div>
            </div>
        </>
    );
};

export default ProfilePageViewLayer;
