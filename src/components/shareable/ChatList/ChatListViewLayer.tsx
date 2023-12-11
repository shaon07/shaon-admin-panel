import { checkArray } from '@/helpers'
import { chatListType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

export type ChatListViewLayerProps = {
    chatList: chatListType[]
}

export default function ChatListViewLayer({ chatList }: ChatListViewLayerProps) {
    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
                Chats
            </h4>

            <div>
                {checkArray(chatList) && chatList.map((chat, key) => (
                    <Link
                        href="/"
                        className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
                        key={key}
                    >
                        <div className="relative h-14 w-14 rounded-full">
                            <Image src={chat.avatar} alt="User" width={57} height={56} />
                            <span
                                className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white ${chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                                    } `}
                            ></span>
                        </div>

                        <div className="flex flex-1 items-center justify-between">
                            <div>
                                <h5 className="font-medium text-black dark:text-white">
                                    {chat.name}
                                </h5>
                                <p>
                                    <span className="text-sm text-black dark:text-white">
                                        {chat.text}
                                    </span>
                                    <span className="text-xs"> . {chat.time} min</span>
                                </p>
                            </div>
                            {chat.textCount !== 0 && (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                                    <span className="text-sm font-medium text-white">
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
