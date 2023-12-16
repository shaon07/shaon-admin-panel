"use client";
import { OpenIcon, SwitchCloseIcon } from "@/custom-icons";
import { styles } from "@/styles/tailwind/Switcher/one.css";
import { styles as style } from "@/styles/tailwind/Switcher/three.css";
import { useState } from "react";

const SwitcherThree = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div>
            <label
                htmlFor="toggle3"
                className={`${styles.label}`}
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id="toggle3"
                        className="sr-only"
                        onChange={() => {
                            setEnabled(!enabled);
                        }}
                    />
                    <div className={style.content}></div>
                    <div
                        className={`${style.box} ${enabled && style.enabled
                            }`}
                    >
                        <span className={`hidden ${enabled && "!block"}`}>
                            <OpenIcon />
                        </span>
                        <span className={`${enabled && "hidden"}`}>
                            <SwitchCloseIcon />
                        </span>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default SwitcherThree;
