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
      <Link href="/">
        <Image
          width={176}
          height={32}
          src={"/images/logo/logo.svg"}
          alt="Logo"
          priority
        />
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
