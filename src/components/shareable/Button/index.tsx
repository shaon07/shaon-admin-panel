"use client";

import { styles } from "@/styles/tailwind/Button/index.css";

type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
    variants?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
}

export default function Button({ onClick = () => { }, text, className, variants = "primary", type = "button" }: ButtonProps) {
    return <button onAbort={onClick} type={type} className={`${styles[variants]} ${className}`}>
        {text}
    </button>
}
