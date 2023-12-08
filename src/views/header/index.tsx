import DarkModeSwitcher from '@/components/shareable/DarkModeSwitcher';
import MessageBoard from '@/components/shareable/DropdownMessage';
import NotificationBoard from '@/components/shareable/DropdownNotification';
import ProfileBoard from '@/components/shareable/DropdownUser';
import { styles } from '@/styles/tailwind/Header/index.css';
import HamburgerMenuButton from './HamburgerMenuButton';
import HeaderSearchBar from './HeaderSearchbar';

type HeaderViewLayerType = {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

export default function HeaderViewLayer({ setSidebarOpen, sidebarOpen }: HeaderViewLayerType) {
    return (
        <header className={`${styles.headerWrapper}`}>
            <div className={`${styles.headerContentWrapper}`}>
                <HamburgerMenuButton setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

                <HeaderSearchBar />

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-2 2xsm:gap-4">
                        {/* <!-- Dark Mode Toggler --> */}

                        <DarkModeSwitcher />
                        {/* <!-- Dark Mode Toggler --> */}

                        {/* <!-- Notification Menu Area --> */}
                        <NotificationBoard />
                        {/* <!-- Notification Menu Area --> */}

                        {/* <!-- Chat Notification Area --> */}
                        <MessageBoard />
                        {/* <!-- Chat Notification Area --> */}
                    </ul>

                    {/* <!-- User Area --> */}
                    <ProfileBoard />
                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    )
}
