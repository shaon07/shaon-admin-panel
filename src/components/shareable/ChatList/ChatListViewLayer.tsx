import { checkArray } from '@/helpers'
import { styles } from '@/styles/tailwind/ChatListViewLayer/index.css'
import { chatListType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export type ChatListViewLayerProps = {
    chatList: chatListType[]
}

export default function ChatListViewLayer({ chatList }: ChatListViewLayerProps) {
    return (
        <div className={`${styles.chatListViewLayerWrapper}`}>
            <h4 className={`${styles.heading}`}>
                Chats
            </h4>

            <div>
                {checkArray(chatList) && chatList.map((chat, key) => (
                    <Link
                        href="/"
                        className={`${styles.chatListWrapper}`}
                        key={key}
                    >
                        <div className={`${styles.chatListContent}`}>
                            <Image src={chat.avatar} alt="User" width={57} height={56} />
                            <span
                                className={`${styles.chatListDot} ${chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                                    } `}
                            ></span>
                        </div>

                        <div className={`${styles.chatListDataWrapper}`}>
                            <div>
                                <h5 className={`${styles.chatName}`}>
                                    {chat.name}
                                </h5>
                                <p>
                                    <span className={`${styles.chatText}`}>
                                        {chat.text}
                                    </span>
                                    <span className="text-xs"> . {chat.time} min</span>
                                </p>
                            </div>
                            {chat.textCount !== 0 && (
                                <div className={`${styles.chatCountWrapper}`}>
                                    <span className={`${styles.chatCount}`}>
                                        {" "}
                                        {chat.textCount}
                                    </span>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
