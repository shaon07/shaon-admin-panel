import {
  CalenderIcon,
  ChartIcon,
  DashboardIcon,
  FormIcon,
  ProfileIcon,
  SettingsIcon,
  TablesIcon
} from "@/custom-icons";

export const menuList = [
  {
    groupTitle: "MENU",
    menuItems: [
      {
        title: "Dashboard",
        value: "dashboard",
        link: "dashboard",
        icon: <DashboardIcon />,
        children: [
          {
            title: "E-Commerce",
            value: "e-commerce",
            link: "/",
            icon: "",
            children: [],
          },
        ],
      },
      {
        title: "Calendar",
        value: "calendar",
        link: "/calendar",
        icon: <CalenderIcon />,
        children: [],
      },
      {
        title: "Profile",
        value: "profile",
        link: "/profile",
        icon: <ProfileIcon />,
        children: [],
      },
      {
        title: "Forms",
        value: "forms",
        link: "forms",
        icon: <FormIcon />,
        children: [
          {
            title: "Form Elements",
            value: "form-elements",
            link: "/forms/form-elements",
            icon: "",
            children: [],
          },
          {
            title: "Form Layouts",
            value: "form-layouts",
            link: "/forms/form-layouts",
            icon: "",
            children: [],
          },
        ],
      },
      {
        title: "Tables",
        value: "tables",
        link: "/tables",
        icon: <TablesIcon />,
        children: [],
      },
      {
        title: "Settings",
        value: "settings",
        link: "/settings",
        icon: <SettingsIcon />,
        children: [],
      },
    ],
  },
  {
    groupTitle: "OTHERS",
    menuItems: [
      {
        title: "Chart",
        value: "chart",
        link: "/chart",
        icon: <ChartIcon />,
        children: [],
      },
    ],
  },
];
