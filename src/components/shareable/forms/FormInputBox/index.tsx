"use client";

import { styles } from "@/styles/tailwind/FormInputBox/index.css";

type FormInputBoxProps = {
    type?: "text" | "number" | "email" | "password";
    variant?: "normal" | "active" | "disabled";
    label?: string
    className?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInputBox({ label = "", placeholder = "", variant = "normal", type = "text", className = "", onChange = () => { } }: FormInputBoxProps) {

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
            <input
                type={type || "text"}
                placeholder={placeholder || "Default Input"}
                onChange={onChange}
                disabled={variant === "disabled"}
                className={`${styles.formInputBox} ${className} ${handleVariant()}`}
            />
        </div>
    )
}
