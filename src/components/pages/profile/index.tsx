import Image from "next/image";

import BreadCrumb from "@/components/ui/pages/calender/breadCrumb";
import ProfileDetail from "@/components/ui/pages/profile/profileDetail";
import { ADMIN_COVER_IMAGE, ADMIN_IMAGE } from "@/constant";
import { CameraIcon, EditIcon } from "@/custom-icons";
import { styles } from "@/styles/tailwind/ProfilePageViewLayer/index.css";


const ProfilePageViewLayer = () => {
    return (
        <>
            <BreadCrumb title="Profile" />

            <div className={`${styles.profilePageViewLayerWrapper}`}>
                <div className={`${styles.coverWrapper}`}>
                    <Image
                        src={ADMIN_COVER_IMAGE}
                        alt="profile cover"
                        className={`${styles.coverImage}`}
                        width={970}
                        height={260}
                        quality={100}
                    />
                    <div className={`${styles.coverContent}`}>
                        <label
                            htmlFor="cover"
                            className={`${styles.coverLabel}`}
                        >
                            <input type="file" name="cover" id="cover" className="sr-only" />
                            <span>
                                <EditIcon />
                            </span>
                            <span>Edit</span>
                        </label>
                    </div>
                </div>

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
