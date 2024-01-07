"use client";

import { styles } from "@/styles/tailwind/FormInputBox/index.css";

type FormTextAreaBoxProps = {
  variant?: "normal" | "active" | "disabled";
  label?: string
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  PrefixIcon?: React.ReactNode | null;
}

export default function FormTextAreaBox({ label = "", placeholder = "", variant = "normal", className = "", PrefixIcon = null, onChange = () => { } }: FormTextAreaBoxProps) {

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
      </div>
      <textarea placeholder={placeholder || "Default Input"}
        onChange={onChange}
        disabled={variant === "disabled"}
        rows={6}
        className={`${styles.formInputBox} ${PrefixIcon ? styles.prefixIcon : ""} ${className} ${handleVariant()}`}></textarea>
    </div>
  )
}
