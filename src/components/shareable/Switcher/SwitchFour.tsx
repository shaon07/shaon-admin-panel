"use client";
import { styles as style } from "@/styles/tailwind/Switcher/four.css";
import { styles } from "@/styles/tailwind/Switcher/one.css";
import { useState } from "react";

const SwitcherFour = () => {
    const [enabled, setEnabled] = useState<boolean>(false);

    return (
        <div>
            <label
                htmlFor="toggle4"
                className={`${styles.label}`}
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id="toggle4"
                        className="sr-only"
                        onChange={() => {
                            setEnabled(!enabled);
                        }}
                    />
                    <div className={`${style.content}`}></div>
                    <div
                        className={`${style.box} ${enabled && style.enabled
                            }`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default SwitcherFour;
