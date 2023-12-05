import HamburgerMenuButton from './HamburgerMenuButton';
import HeaderSearchBar from './HeaderSearchbar';

type HeaderViewLayerType = {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

export default function HeaderViewLayer({ setSidebarOpen, sidebarOpen }: HeaderViewLayerType) {
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <HamburgerMenuButton setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

                <HeaderSearchBar />

                {/* <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4"> */}
                {/* <!-- Dark Mode Toggler --> */}
                {/* <DarkModeSwitcher /> */}
                {/* <!-- Dark Mode Toggler --> */}

                {/* <!-- Notification Menu Area --> */}
                {/* <DropdownNotification /> */}
                {/* <!-- Notification Menu Area --> */}

                {/* <!-- Chat Notification Area --> */}
                {/* <DropdownMessage /> */}
                {/* <!-- Chat Notification Area --> */}
                {/* </ul> */}

                {/* <!-- User Area --> */}
                {/* <DropdownUser /> */}
                {/* <!-- User Area --> */}
                {/* </div> */}
            </div>
        </header>
    )
}
