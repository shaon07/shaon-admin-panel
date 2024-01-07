import { MessageIcon } from '@/custom-icons';
import { checkArray } from '@/helpers';
import { styles } from '@/styles/tailwind/messageBoard/index.css';
import Link from 'next/link';
import React from 'react';
import MessageListItem from './messageListItem';

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
                                <MessageListItem key={index} />
                            )
                        })
                    }

                </ul>
            </div>
            {/* <!-- Dropdown End --> */}
        </li>
    )
}
