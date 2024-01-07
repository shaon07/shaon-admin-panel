import { styles } from "@/styles/tailwind/ProfilePageViewLayer/profileAboutMeCard.css";

export default function ProfileAboutMeCard() {
    return (
        <div className={`${styles.aboutMeWrapper}`}>
            <h4 className={`${styles.heading}`}>
                About Me
            </h4>
            <p className="mt-4.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
            </p>
        </div>
    )
}
