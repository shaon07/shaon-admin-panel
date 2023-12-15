"use client";

import useImageUploader from '@/hooks/useImageUploader';
import ProfilePhotoViewLayer from '@/views/common/profilePhotoCard';

export default function ProfilePhoto() {
    const { handleImageChange, image: selectedImage } = useImageUploader();

    return <ProfilePhotoViewLayer selectedImage={selectedImage} handleImageChange={handleImageChange} />
}
