import { styles } from '@/styles/tailwind/profileBoard/profileMenuList.css';
import Link from 'next/link';

type ProfileMenuListType = {
    link: string;
    Icon: React.ReactNode;
    title: string;
}

export default function ProfileMenuList({ Icon, link, title }: ProfileMenuListType) {
    return (
        <li>
            <Link
                href={`/${link}`}
                className={`${styles.profileListWrapper}`}
            >
                {Icon}
                {title}
            </Link>
        </li>
    )
}
