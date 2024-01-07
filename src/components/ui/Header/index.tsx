import HeaderViewLayer from "@/views/header";

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function Header({ setSidebarOpen, sidebarOpen }: HeaderProps) {
  return <HeaderViewLayer setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />;
}
