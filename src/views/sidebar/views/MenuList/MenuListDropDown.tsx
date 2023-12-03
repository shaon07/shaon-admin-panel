import SidebarLinkGroup from "@/components/ui/Sidebar/SidebarLinkGroup";
import { MenuDropDownIcon } from "@/custom-icons";
import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import Link from "next/link";
import React from "react";
import MenuListItem from "./MenuListItem";

type MenuListDropDownType = {
  pathname: string;
  sidebarExpanded: boolean;
  setSidebarExpanded: (arg: boolean) => void;
  link: string;
  value: string;
  icon: React.ReactNode;
  title: string;
  childList: any[];
};

export default function MenuListDropDown({
  pathname,
  sidebarExpanded,
  setSidebarExpanded,
  link,
  value,
  icon,
  title,
  childList,
}: MenuListDropDownType) {
  return (
    <SidebarLinkGroup
      activeCondition={pathname === link || pathname.includes(value)}
    >
      {(handleClick, open) => {
        return (
          <React.Fragment>
            <Link
              href="#"
              className={` ${styles.sidebarMenuItem} ${
                (pathname === link || pathname.includes(value)) &&
                "bg-graydark dark:bg-meta-4"
              }`}
              onClick={(e) => {
                e.preventDefault();
                sidebarExpanded ? handleClick() : setSidebarExpanded(true);
              }}
            >
              {icon}
              {title}
              <MenuDropDownIcon open={open} />
            </Link>
            {/* <!-- Dropdown Menu Start --> */}
            <div
              className={`${styles.dropDownMenuWrapper} ${!open && "hidden"}`}
            >
              <ul className={`${styles.dropDownMenuListWrapper}`}>
                {childList.map((child, index) => {
                  return (
                    <MenuListItem
                      key={index}
                      href={child.link}
                      icon={child.icon}
                      title={child.title}
                      value={child.value}
                      pathname={pathname}
                    />
                  );
                })}
              </ul>
            </div>
            {/* <!-- Dropdown Menu End --> */}
          </React.Fragment>
        );
      }}
    </SidebarLinkGroup>
  );
}
