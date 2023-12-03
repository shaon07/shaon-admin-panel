import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import Link from "next/link";
import React from "react";

type MenuListItemType = {
  href: string;
  value: string;
  title: string;
  icon: React.ReactNode;
  pathname: string;
};

export default function MenuListItem({
  href,
  value,
  title,
  icon,
  pathname,
}: MenuListItemType) {
  return (
    <li>
      <Link
        href={href}
        className={`${styles.sidebarMenuItem} ${
          pathname.includes(value) && "bg-graydark dark:bg-meta-4"
        }`}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
}
