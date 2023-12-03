import SidebarLinkGroup from "@/components/ui/Sidebar/SidebarLinkGroup";
import { MenuDropDownIcon } from "@/custom-icons";
import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import Link from "next/link";
import React from "react";
import { menuList } from "../../data/menuList";
import MenuListItem from "./MenuListItem";

type MenuListType = {
  sidebarExpanded: boolean;
  setSidebarExpanded: (arg: boolean) => void;
  pathname: string;
};

export default function MenuList({
  pathname,
  setSidebarExpanded,
  sidebarExpanded,
}: MenuListType) {
  return (
    <div className={`${styles.sidebarNavListWrapper}`}>
      {/* <!-- Sidebar Menu --> */}
      <nav className={`${styles.sidebarNavWrapper}`}>
        {/* <!-- Menu Group --> */}
        {menuList.map((item, index) => {
          return (
            <div key={index}>
              <h3 className={`${styles.sidebarMenuWrapper}`}>
                {item.groupTitle}
              </h3>

              <ul className={`${styles.sidebarMenuItemWrapper}`}>
                {checkArray(item.menuItems) &&
                  item.menuItems.map((item, index) => {
                    if (checkArray(item.children)) {
                      return (
                        <SidebarLinkGroup
                          key={index}
                          activeCondition={
                            pathname === item.link ||
                            pathname.includes(item.value)
                          }
                        >
                          {(handleClick, open) => {
                            return (
                              <React.Fragment>
                                <Link
                                  href="#"
                                  className={` ${styles.sidebarMenuItem} ${
                                    (pathname === item.link ||
                                      pathname.includes(item.value)) &&
                                    "bg-graydark dark:bg-meta-4"
                                  }`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    sidebarExpanded
                                      ? handleClick()
                                      : setSidebarExpanded(true);
                                  }}
                                >
                                  {item.icon}
                                  {item.title}
                                  <MenuDropDownIcon open={open} />
                                </Link>
                                {/* <!-- Dropdown Menu Start --> */}
                                <div
                                  className={`${styles.dropDownMenuWrapper} ${
                                    !open && "hidden"
                                  }`}
                                >
                                  {item.children.map((child, index) => {
                                    return (
                                      <ul
                                        key={index}
                                        className={`${styles.dropDownMenuListWrapper}`}
                                      >
                                        <MenuListItem
                                          key={index}
                                          href={child.link}
                                          icon={child.icon}
                                          title={child.title}
                                          value={child.value}
                                          pathname={pathname}
                                        />
                                      </ul>
                                    );
                                  })}
                                </div>
                                {/* <!-- Dropdown Menu End --> */}
                              </React.Fragment>
                            );
                          }}
                        </SidebarLinkGroup>
                      );
                    } else {
                      return (
                        <MenuListItem
                          key={index}
                          href={item.link}
                          icon={item.icon}
                          title={item.title}
                          value={item.value}
                          pathname={pathname}
                        />
                      );
                    }
                  })}
              </ul>
            </div>
          );
        })}
      </nav>
      {/* <!-- Sidebar Menu --> */}
    </div>
  );
}
