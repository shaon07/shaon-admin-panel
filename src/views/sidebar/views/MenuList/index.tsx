import { checkArray } from "@/helpers";
import { styles } from "@/styles/tailwind/sidebarViewLayer/index.css";
import { menuList } from "../../../../resources/menuList/menuList";
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
  const renderMenuListItem = (
    isDropAble: boolean,
    item: any,
    index: number
  ) => {
    return isDropAble ? (
      <MenuListDropDown
        key={index}
        childList={item.children}
        icon={item.icon}
        title={item.title}
        value={item.value}
        link={item.link}
        sidebarExpanded={sidebarExpanded}
        setSidebarExpanded={setSidebarExpanded}
        pathname={pathname}
      />
    ) : (
      <MenuListItem
        key={index}
        href={item.link}
        icon={item.icon}
        title={item.title}
        value={item.value}
        pathname={pathname}
      />
    );
  };


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
                    return renderMenuListItem(
                      checkArray(item.children),
                      item,
                      index
                    );
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
