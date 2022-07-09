import MenuCard from "./MenuCard";

const Menu = ({ menu, category }) => {
  console.log("updatedmenu_item", menu);
  const menuCards = menu.map((menu_item) => {
    console.log("menu_item", menu_item);
    if (menu_item.category === category)
      return <MenuCard menu_item={menu_item} key={menu_item.image} />;
    else if (category === "See Full Menu" || category === "Full Menu")
      return <MenuCard menu_item={menu_item} key={menu_item.image} />;
    else return null;
  });
  return <div className="menu-list">{menuCards}</div>;
};

export default Menu;
