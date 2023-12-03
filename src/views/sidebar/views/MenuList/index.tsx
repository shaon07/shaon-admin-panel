import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import { menuList } from "../../data/menuList";
import MenuListDropDown from "./MenuListDropDown";
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
                        <MenuListDropDown
                          key={index}
                          childList={item.children}
                          icon={item.icon}
                          title={item.title}
                          value={item.value}
                          link={item.link}
                          pathname={pathname}
                          sidebarExpanded={sidebarExpanded}
                          setSidebarExpanded={setSidebarExpanded}
                        />
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
