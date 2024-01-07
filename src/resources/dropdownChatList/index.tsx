import { MyContactIcon, SettingIcon, UserIcon } from "@/custom-icons";

export const profileMenuItems = [
    {
        label: 'Profile',
        path: 'profile',
        icon: <UserIcon />
    },
    {
        label: 'My Contacts',
        path: 'profile',
        icon: <MyContactIcon />
    },
    {
        label: 'Account Settings',
        path: 'profile',
        icon: <SettingIcon />
    }
]