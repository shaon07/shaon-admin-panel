"use client";

import { DropDownIcon } from "@/custom-icons";
import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/SelectBox/index.css";
import { ChangeEvent } from "react";

type optionType = {
    value: string;
    label: string;
}

type SelectBoxProps = {
    label?: string;
    className?: string;
    labelClassName?: string;
    options?: optionType[];
    onChange?: (data?: any) => void;
}

export default function SelectBox({ className = "", labelClassName = "", label = "", options = [], onChange = () => { } }: SelectBoxProps) {
    return (
        <>
            <label className={`${styles.label} ${labelClassName}}`}>
                {label}
            </label>

            <div className={`${styles.selectBoxWrapper} ${className}}`}>
                <select className={`${styles.selectBox}}`} onChange={(event: ChangeEvent<HTMLSelectElement>) => { onChange(event.target.value) }}>
                    {
                        checkArray(options) && options.map((option, index) => {
                            return (
                                <option key={index} value={option.value}>{option.label}</option>
                            )
                        })
                    }
                </select>

                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <DropDownIcon />
                </span>
            </div>
        </>
    )
}
