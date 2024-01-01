"use client";

import Button from "@/components/shareable/Button";
import FileUploader from "@/components/shareable/fileUploader";
import { ADMIN_IMAGE } from "@/constant";
import { globalStyles } from "@/styles/tailwind/global/index.css";
import Image from "next/image";
import { useState } from "react";

export default function PhotoLoader() {
    const [showPhoto, setShowPhoto] = useState("");
    return (
        <div className={`${globalStyles.container}`}>
            <div className={`${globalStyles.border}`}>
                <h3 className={`${globalStyles.h3}`}>
                    Your Photo
                </h3>
            </div>

            <div className="p-7">
                <form action="#">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="h-14 w-14 rounded-full">
                            <Image
                                src={showPhoto || ADMIN_IMAGE}
                                width={55}
                                height={55}
                                alt="User"
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <span className="mb-1.5 text-black dark:text-white">
                                Edit your photo
                            </span>
                            <span className="flex gap-2.5">
                                <button className="text-sm hover:text-primary">
                                    Delete
                                </button>
                                <button className="text-sm hover:text-primary">
                                    Update
                                </button>
                            </span>
                        </div>
                    </div>

                    <FileUploader onUpload={setShowPhoto} />

                    <div className="flex justify-end gap-4.5">
                        <Button text="Cancel" variants="secondary" className="border border-stroke py-2 px-6 w-full" />
                        <Button text="Save" className="w-full" />
                    </div>
                </form>
            </div>
        </div>
    )
}
