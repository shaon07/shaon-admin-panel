import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/SocialShare/index.css";
import { socialDataType } from "@/types";
import { socialShareData } from "./data";

export default function SocialShare() {
    return (
        <div className="mt-6.5">
            <h4 className={`${styles.socialShareWrapper}`}>
                Follow me on
            </h4>
            <div className={`${styles.socialShareWrapper}`}>
                {
                    checkArray(socialShareData) && socialShareData.map((social: socialDataType) => (
                        <a
                            key={social.title}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {social.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}
