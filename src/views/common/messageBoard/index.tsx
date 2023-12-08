import { MessageIcon } from '@/custom-icons';
import { checkArray } from '@/helpers';
import { styles } from '@/styles/tailwind/messageBoard/index.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type MessageBoardViewLayerProps = {
    dropdown: React.RefObject<HTMLDivElement>;
    dropdownOpen: boolean;
    handleToggleBoard: () => void;
    notifying: boolean;
    toggleDropDown: (arg: boolean) => void;
    trigger: React.RefObject<HTMLAnchorElement>;
}
// temp message list fake data;
const messageList: number[] = [];

for (let i = 0; i < 10; i++) {
    messageList.push(i);
}

export default function MessageBoardViewLayer({ dropdown, dropdownOpen, handleToggleBoard, notifying, toggleDropDown, trigger }: MessageBoardViewLayerProps) {
    return (
        <li className="relative">
            <Link
                ref={trigger}
                onClick={() => {
                    handleToggleBoard()
                }}
                className={`${styles.messageBoardWrapper}`}
                href="#"
            >
                <span
                    className={`${styles.messageNotifyIconWrapper} ${notifying === false ? "hidden" : "inline"
                        }`}
                >
                    <span className={`${styles.messageNotifyIcon}`}></span>
                </span>

                <MessageIcon />
            </Link>

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => toggleDropDown(true)}
                onBlur={() => toggleDropDown(false)}
                className={`${styles.messageDropDownWrapper} ${dropdownOpen === true ? "block" : "hidden"
                    }`}
            >
                <div className="px-4.5 py-3">
                    <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
                </div>

                <ul className={`${styles.messageDropDownListWrapper}`}>
                    {
                        checkArray(messageList) && messageList.map((_item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                                        href="/messages"
                                    >
                                        <div className="h-12.5 w-12.5 rounded-full">
                                            <Image
                                                width={112}
                                                height={112}
                                                src={"/images/user/user-01.png"}
                                                alt="User"
                                            />
                                        </div>

                                        <div>
                                            <h6 className="text-sm font-medium text-black dark:text-white">
                                                Robert Jhon
                                            </h6>
                                            <p className="text-sm">Can you share your offer?</p>
                                            <p className="text-xs">10min ago</p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
            {/* <!-- Dropdown End --> */}
        </li>
    )
}
