
import { ADMIN_IMAGE } from '@/constant';
import { CameraIcon } from '@/custom-icons';
import { styles } from "@/styles/tailwind/ProfilePageViewLayer/index.css";
import Image from 'next/image';

type ProfilePhotoViewLayerType = {
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedImage: string | null;
}

export default function ProfilePhotoViewLayer({ handleImageChange, selectedImage }: ProfilePhotoViewLayerType) {

    return (
        <div className={`${styles.profilePic}`}>
            <Image
                src={selectedImage || ADMIN_IMAGE}
                width={160}
                height={160}
                alt="profile"
                className="rounded-full object-cover w-[160px] h-[150px]"
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
                    onChange={handleImageChange}
                />
            </label>
        </div>
    )
}
