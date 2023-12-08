import { profileMenuItems } from '@/components/shareable/DropdownUser/data';
import { LogoutIcon, ProfileDropDown } from '@/custom-icons';
import { checkArray } from '@/helpers';
import { styles } from '@/styles/tailwind/profileBoard/index.css';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProfileMenuList from './profileMenuList';

type ProfileBoardViewLayerType = {
    dropdown: React.RefObject<HTMLDivElement>;
    dropdownOpen: boolean;
    handleToggleBoard: () => void;
    toggleDropDown: (arg: boolean) => void;
    trigger: React.RefObject<HTMLAnchorElement>;
}

export default function ProfileBoardViewLayer({ dropdown, dropdownOpen, handleToggleBoard, toggleDropDown, trigger }: ProfileBoardViewLayerType) {
    return (
        <div className="relative">
            <Link
                ref={trigger}
                onClick={() => handleToggleBoard()}
                className="flex items-center gap-4"
                href="#"
            >
                <span className={`${styles.profileNameWrapper}`}>
                    <span className={`${styles.profileNameTitle}`}>
                        Thomas Anree
                    </span>
                    <span className="block text-xs">UX Designer</span>
                </span>

                <span className="h-12 w-12 rounded-full">
                    <Image
                        width={112}
                        height={112}
                        src={"/images/user/user-01.png"}
                        alt="User"
                    />
                </span>

                <ProfileDropDown />
            </Link>

            {/* <!-- Dropdown Start --> */}
            <div
                ref={dropdown}
                onFocus={() => toggleDropDown(true)}
                onBlur={() => toggleDropDown(false)}
                className={`${styles.profileBoardWrapper} ${dropdownOpen === true ? "block" : "hidden"
                    }`}
            >
                <ul className={`${styles.profileBoardListWrapper}`}>
                    {
                        checkArray(profileMenuItems) && profileMenuItems.map((item, index) => (
                            <ProfileMenuList key={index} Icon={item.icon} link={item.path} title={item.label} />
                        ))
                    }
                </ul>
                <button className={`${styles.profileButton}`}>
                    <LogoutIcon />
                    Log Out
                </button>
            </div>
            {/* <!-- Dropdown End --> */}
        </div>
    )
}
