import SidebarLinkGroup from "@/components/ui/Sidebar/SidebarLinkGroup";
import {
  AuthIcon,
  CalenderIcon,
  ChartIcon,
  DashboardIcon,
  FormIcon,
  MenuDropDownIcon,
  ProfileIcon,
  SettingsIcon,
  TablesIcon,
  UIELementsIcon,
} from "@/custom-icons";
import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import Link from "next/link";
import React from "react";

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
        <div>
          <h3 className={`${styles.sidebarMenuWrapper}`}>MENU</h3>

          <ul className={`${styles.sidebarMenuItemWrapper}`}>
            {/* <!-- Menu Item Dashboard --> */}
            <SidebarLinkGroup
              activeCondition={
                pathname === "/" || pathname.includes("dashboard")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={` ${styles.sidebarMenuItem} ${
                        (pathname === "/" || pathname.includes("dashboard")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <DashboardIcon />
                      Dashboard
                      <MenuDropDownIcon open={open} />
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`${styles.dropDownMenuWrapper} ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className={`${styles.dropDownMenuListWrapper}`}>
                        <li>
                          <Link
                            href="/"
                            className={`${styles.dropMenuListWrapper} ${
                              pathname === "/" && "text-white"
                            } `}
                          >
                            eCommerce
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            {/* <!-- Menu Item Dashboard --> */}

            {/* <!-- Menu Item Calendar --> */}
            <li>
              <Link
                href="/calendar"
                className={`${styles.sidebarMenuItem} ${
                  pathname.includes("calendar") && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <CalenderIcon />
                Calendar
              </Link>
            </li>
            {/* <!-- Menu Item Calendar --> */}

            {/* <!-- Menu Item Profile --> */}
            <li>
              <Link
                href="/profile"
                className={`${styles.sidebarMenuItem} ${
                  pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <ProfileIcon />
                Profile
              </Link>
            </li>
            {/* <!-- Menu Item Profile --> */}

            {/* <!-- Menu Item Forms --> */}
            <SidebarLinkGroup
              activeCondition={
                pathname === "/forms" || pathname.includes("forms")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`${styles.sidebarMenuItem} ${
                        (pathname === "/forms" || pathname.includes("forms")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <FormIcon />
                      Forms
                      <MenuDropDownIcon open={open} />
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`${styles.dropDownMenuWrapper} ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className={`${styles.dropDownMenuListWrapper}`}>
                        <li>
                          <Link
                            href="/forms/form-elements"
                            className={`${styles.dropMenuListLink} ${
                              pathname === "/forms/form-elements" &&
                              "text-white"
                            }`}
                          >
                            Form Elements
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/forms/form-layout"
                            className={`${styles.dropMenuListLink} ${
                              pathname === "/forms/form-layout" && "text-white"
                            }`}
                          >
                            Form Layout
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            {/* <!-- Menu Item Forms --> */}

            {/* <!-- Menu Item Tables --> */}
            <li>
              <Link
                href="/tables"
                className={`${styles.sidebarMenuItem} ${
                  pathname.includes("tables") && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <TablesIcon />
                Tables
              </Link>
            </li>
            {/* <!-- Menu Item Tables --> */}

            {/* <!-- Menu Item Settings --> */}
            <li>
              <Link
                href="/settings"
                className={`${styles.sidebarMenuItem} ${
                  pathname.includes("settings") && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <SettingsIcon />
                Settings
              </Link>
            </li>
            {/* <!-- Menu Item Settings --> */}
          </ul>
        </div>

        {/* <!-- Others Group --> */}
        <div>
          <h3 className={`${styles.sidebarMenuWrapper}`}>OTHERS</h3>

          <ul className={`${styles.sidebarMenuItemWrapper}`}>
            {/* <!-- Menu Item Chart --> */}
            <li>
              <Link
                href="/chart"
                className={`${styles.sidebarMenuItem} ${
                  pathname.includes("chart") && "bg-graydark dark:bg-meta-4"
                }`}
              >
                <ChartIcon />
                Chart
              </Link>
            </li>
            {/* <!-- Menu Item Chart --> */}

            {/* <!-- Menu Item Ui Elements --> */}
            <SidebarLinkGroup
              activeCondition={pathname === "/ui" || pathname.includes("ui")}
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`${styles.sidebarMenuItem} ${
                        (pathname === "/ui" || pathname.includes("ui")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <UIELementsIcon />
                      UI Elements
                      <MenuDropDownIcon open={open} />
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`${styles.dropDownMenuWrapper} ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className={`${styles.dropDownMenuListWrapper}`}>
                        <li>
                          <Link
                            href="/ui/alerts"
                            className={`${styles.dropMenuListWrapper} ${
                              pathname === "/ui/alerts" && "text-white"
                            }`}
                          >
                            Alerts
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/ui/buttons"
                            className={`${styles.dropMenuListWrapper} ${
                              pathname === "/ui/buttons" && "text-white"
                            }`}
                          >
                            Buttons
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            {/* <!-- Menu Item Ui Elements --> */}

            {/* <!-- Menu Item Auth Pages --> */}
            <SidebarLinkGroup
              activeCondition={
                pathname === "/auth" || pathname.includes("auth")
              }
            >
              {(handleClick, open) => {
                return (
                  <React.Fragment>
                    <Link
                      href="#"
                      className={`${styles.sidebarMenuItem} ${
                        (pathname === "/auth" || pathname.includes("auth")) &&
                        "bg-graydark dark:bg-meta-4"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <AuthIcon />
                      Authentication
                      <MenuDropDownIcon open={open} />
                    </Link>
                    {/* <!-- Dropdown Menu Start --> */}
                    <div
                      className={`${styles.dropDownMenuWrapper} ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className={`${styles.dropDownMenuListWrapper}`}>
                        <li>
                          <Link
                            href="/auth/signin"
                            className={`${styles.dropMenuListWrapper} ${
                              pathname === "/auth/signin" && "text-white"
                            }`}
                          >
                            Sign In
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/auth/signup"
                            className={`${styles.dropMenuListWrapper} ${
                              pathname === "/auth/signup" && "text-white"
                            }`}
                          >
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- Dropdown Menu End --> */}
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
            {/* <!-- Menu Item Auth Pages --> */}
          </ul>
        </div>
      </nav>
      {/* <!-- Sidebar Menu --> */}
    </div>
  );
}
