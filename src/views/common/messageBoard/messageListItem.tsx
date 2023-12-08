import { styles } from '@/styles/tailwind/messageBoard/messageListItem.css'
import Image from 'next/image'
import Link from 'next/link'

export default function MessageListItem() {
    return (
        <li>
            <Link
                className={`${styles.messageListItemWrapper}`}
                href="/messages"
            >
                <div className={`${styles.messageListItemContent}`}>
                    <Image
                        width={112}
                        height={112}
                        src={"/images/user/user-01.png"}
                        alt="User"
                    />
                </div>

                <div>
                    <h6 className={`${styles.messageHeading}`}>
                        Robert Jhon
                    </h6>
                    <p className="text-sm">Can you share your offer?</p>
                    <p className="text-xs">10min ago</p>
                </div>
            </Link>
        </li>
    )
}
