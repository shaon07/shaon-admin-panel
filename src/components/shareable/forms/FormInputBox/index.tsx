"use client";

import { styles } from "@/styles/tailwind/FormInputBox/index.css";

type FormInputBoxProps = {
    type?: "text" | "number" | "email" | "password";
    variant?: "normal" | "active" | "disabled";
    label?: string
    className?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    PrefixIcon?: React.ReactNode | null;
}

export default function FormInputBox({ label = "", placeholder = "", variant = "normal", type = "text", className = "", PrefixIcon = null, onChange = () => { } }: FormInputBoxProps) {

    const handleVariant = () => {
        switch (variant) {
            case "active":
                return "!border-primary";

            case "disabled":
                return "!disabled:bg-whiter";

            default:
                return ""
        }
    }

    return (
        <div>
            <label className="mb-3 block text-black dark:text-white">
                {label || "Default Input"}
            </label>
            <div className="relative">
                {PrefixIcon && <span className="absolute left-4.5 top-4">
                    {PrefixIcon}
                </span>}
                <input
                    type={type || "text"}
                    placeholder={placeholder || "Default Input"}
                    onChange={onChange}
                    disabled={variant === "disabled"}
                    className={`${styles.formInputBox} ${PrefixIcon ? styles.prefixIcon : ""} ${className} ${handleVariant()}`}
                />
            </div>
        </div>
    )
}
