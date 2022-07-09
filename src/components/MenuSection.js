import ButtonList from "./ButtonList";
import Menu from "./Menu";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../actions";

const MenuSection = (props) => {
  const categoryName = useSelector((state) => state.categoryName);
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMenu = () => {
    dispatch(fetchMenu("menu"));
  };

  return (
    <div className="menu-section">
      <div className="container">
        <div className="content-block">
          <h2>
            {props.headingOne}
            <br />
            {props.headingTwo}
          </h2>
          <p>
            {props.paraOne}
            <br />
            {props.paraTwo}
          </p>
        </div>
        <div className="home-menu">
          <ButtonList
            cName="menuButton-list hidden-button"
            menuButton1="Full Menu"
            menuButton2="Burgers"
            menuButton3="Sides"
            menuButton4="Drinks"
          />
          <Menu menu={menu} category={categoryName} />
        </div>
        <div className="full-menu-button">
          <a className="button" href="/order">
            See Full Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
