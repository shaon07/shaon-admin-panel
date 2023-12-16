"use client";
import { styles } from "@/styles/tailwind/Switcher/one.css";
import { styles as stylesTwo } from "@/styles/tailwind/Switcher/two.css";
import { useState } from "react";

const SwitcherTwo = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div x-data="{ switcherToggle: false }">
            <label
                htmlFor="toggle2"
                className={`${styles.label}`}
            >
                <div className="relative">
                    <input
                        id="toggle2"
                        type="checkbox"
                        className="sr-only"
                        onChange={() => {
                            setEnabled(!enabled);
                        }}
                    />
                    <div className={`${stylesTwo.content}`}></div>
                    <div
                        className={`${stylesTwo.box} ${enabled && stylesTwo.enabled
                            }`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default SwitcherTwo;
