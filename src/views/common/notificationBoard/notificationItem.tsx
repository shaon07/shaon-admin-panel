import { styles } from '@/styles/tailwind/notificationBoard/notificationItem.css'
import Link from 'next/link'

export default function NotificationItem() {
    return (
        <li >
            <Link
                className={`${styles.notificationListItem}`}
                href="#"
            >
                <p className="text-sm">
                    <span className="text-black dark:text-white">
                        Edit your information in a swipe
                    </span>{' '}
                    Sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim.
                </p>

                <p className="text-xs">12 May, 2025</p>
            </Link>
        </li>
    )
}
