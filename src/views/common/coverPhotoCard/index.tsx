
import { ADMIN_COVER_IMAGE } from '@/constant';
import { EditIcon } from '@/custom-icons';
import { styles } from "@/styles/tailwind/ProfilePageViewLayer/index.css";
import Image from 'next/image';

type CoverPhotoCardViewLayerType = {
    selectedImage: string | null
    handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CoverPhotoCardViewLayer({ handleImageChange, selectedImage }: CoverPhotoCardViewLayerType) {

    return (
        <div className={`${styles.coverWrapper}`}>
            <Image
                src={selectedImage || ADMIN_COVER_IMAGE}
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
                    <input type="file" onChange={handleImageChange} name="cover" id="cover" className="sr-only" />
                    <span>
                        <EditIcon />
                    </span>
                    <span>Edit</span>
                </label>
            </div>
        </div>
    )
}
