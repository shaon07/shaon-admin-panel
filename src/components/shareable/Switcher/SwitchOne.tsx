"use client";
import { styles } from "@/styles/tailwind/Switcher/one.css";
import { useState } from "react";

const SwitcherOne = () => {
    const [enabled, setEnabled] = useState<boolean>(false);

    return (
        <div>
            <label
                htmlFor="toggle1"
                className={`${styles.label}`}
            >
                <div className="relative">
                    <input
                        type="checkbox"
                        id="toggle1"
                        className="sr-only"
                        onChange={() => {
                            setEnabled(!enabled);
                        }}
                    />
                    <div className={`${styles.content}`}></div>
                    <div
                        className={`${styles.box} ${enabled && styles.enable}`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default SwitcherOne;
