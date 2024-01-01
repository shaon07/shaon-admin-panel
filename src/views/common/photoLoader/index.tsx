import Button from "@/components/shareable/Button";
import { ADMIN_IMAGE } from "@/constant";
import { UploadIcon } from "@/custom-icons";
import { globalStyles } from "@/styles/tailwind/global/index.css";
import { styles } from "@/styles/tailwind/photoLoader/index.css";
import Image from "next/image";

export default function PhotoLoader() {
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
                                src={ADMIN_IMAGE}
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

                    <div
                        id="FileUpload"
                        className={`${styles.wrapper}`}
                    >
                        <input
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                        />
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
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

                    <div className="flex justify-end gap-4.5">
                        <Button text="Cancel" variants="secondary" className="border border-stroke py-2 px-6 w-full" />
                        <Button text="Save" className="w-full" />
                    </div>
                </form>
            </div>
        </div>
    )
}
