"use client";

import useImageUploader from '@/hooks/useImageUploader';
import CoverPhotoCardViewLayer from '@/views/common/coverPhotoCard';

export default function CoverPhotoCard() {
    const { handleImageChange, image: selectedImage } = useImageUploader();
    return <CoverPhotoCardViewLayer selectedImage={selectedImage} handleImageChange={handleImageChange} />
}
