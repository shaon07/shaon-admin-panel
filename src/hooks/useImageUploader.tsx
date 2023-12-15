import { ChangeEvent, useState } from 'react';

export default function useImageUploader() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return {
        image: selectedImage,
        handleImageChange
    }
}
