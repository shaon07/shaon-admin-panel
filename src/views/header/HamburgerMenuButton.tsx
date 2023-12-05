import { styles } from '@/styles/tailwind/Header/hamburgerMenu.css';
import Image from 'next/image';
import Link from 'next/link';

type HamburgerMenuButtonType = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function HamburgerMenuButton({ setSidebarOpen, sidebarOpen }: HamburgerMenuButtonType) {
  return (
    <div className={`${styles.hamburgerMenuWrapper}`}>
      {/* <!-- Hamburger Toggle BTN --> */}
      <button
        aria-controls="sidebar"
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
        className={`${styles.hamburgerButton}`}
      >
        <span className={`${styles.hamburgerButtonContentWrapper}`}>
          <span className="du-block absolute right-0 h-full w-full">
            <span
              className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!sidebarOpen && "!w-full delay-300"
                }`}
            ></span>
            <span
              className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!sidebarOpen && "delay-400 !w-full"
                }`}
            ></span>
            <span
              className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!sidebarOpen && "!w-full delay-500"
                }`}
            ></span>
          </span>
          <span className="absolute right-0 h-full w-full rotate-45">
            <span
              className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!sidebarOpen && "!h-0 !delay-[0]"
                }`}
            ></span>
            <span
              className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!sidebarOpen && "!h-0 !delay-200"
                }`}
            ></span>
          </span>
        </span>
      </button>
      {/* <!-- Hamburger Toggle BTN --> */}

      <Link className="block flex-shrink-0 lg:hidden" href="/">
        <Image
          width={32}
          height={32}
          src={"/images/logo/logo-icon.svg"}
          alt="Logo"
        />
      </Link>
    </div>
  )
}
