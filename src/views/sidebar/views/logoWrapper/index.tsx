import { Logo } from "@/custom-icons";
import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import Image from "next/image";
import Link from "next/link";

type LogoWrapperType = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  trigger: any;
};

export default function LogoWrapper({
  setSidebarOpen,
  sidebarOpen,
  trigger,
}: LogoWrapperType) {
  return (
    <div className={`${styles.sidebarHeaderWrapper}`}>
      <Link href="/" className="flex items-center gap-4">
        <Image
          width={176}
          height={32}
          src={"/images/logo/Logo-new.svg"}
          alt="Logo"
          priority
          className="w-[50px]"
        />
        <span className="text-white ">TailWind Admin</span>
      </Link>

      <button
        ref={trigger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="block lg:hidden"
      >
        <Logo />
      </button>
    </div>
  );
}
