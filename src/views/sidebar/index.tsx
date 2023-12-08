
import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import MenuList from "./views/MenuList";
import LogoWrapper from "./views/logoWrapper";

type SidebarViewLayerType = {
  sidebar: any;
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  trigger: any;
  pathname: string;
  sidebarExpanded: boolean;
  setSidebarExpanded: (arg: boolean) => void;
};

export default function SidebarViewLayer({
  sidebar,
  setSidebarOpen,
  sidebarOpen,
  pathname,
  trigger,
  setSidebarExpanded,
  sidebarExpanded,
}: SidebarViewLayerType) {
  return (
    <aside
      ref={sidebar}
      className={`${styles.sidebarWrapper} ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <LogoWrapper {...{ setSidebarOpen, sidebarOpen, trigger }} />
      {/* <!-- SIDEBAR HEADER --> */}

      <MenuList {...{ pathname, sidebarExpanded, setSidebarExpanded }} />
    </aside>
  );
}
