/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { UploadIcon } from '@/custom-icons';
import useImageUploader from '@/hooks/useImageUploader';
import { styles } from '@/styles/tailwind/fileUploader/index.css';
import { useEffect } from 'react';

type FileUploaderProps = {
    onUpload?: (data?: any) => void
}

export default function FileUploader({ onUpload = () => { } }: FileUploaderProps) {
    const { handleImageChange, image } = useImageUploader();

    useEffect(() => {
        if (image) {
            onUpload(image)
        }

        return () => {
            onUpload(null)
        }
    }, [image])

    return (
        <div
            id="FileUpload"
            className={`${styles.wrapper}`}
        >
            <input
                type="file"
                accept="image/*"
                className={`${styles.input}`}
                onChange={handleImageChange}
            />
            <div className={`${styles.box}`}>
                <span className={`${styles.uploader}`}>
                    <UploadIcon />
                </span>
                <p>
                    <span className="text-primary">Click to upload</span> or
                    drag and drop
                </p>
                <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                <p>(max, 800 X 800px)</p>
            </div>
        </div>
    )
}
