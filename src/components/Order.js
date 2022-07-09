import SectionHeader from "./SectionHeader";
import ButtonList from "./ButtonList";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { fetchMenu, setCategory, setPage } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";

const Order = () => {
  const categoryName = useSelector((state) => state.categoryName);
  let menu = useSelector((state) => state.menu);
  const page = useSelector((state) => state.page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("See Full Menu"));
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMenu = () => {
    dispatch(fetchMenu("menu"));
  };

  // const changePage = () => {
  //   console.log("in changePage");
  //   if (page === 1 || page === 0) {
  //     console.log("before page");
  //     dispatch(setPage(2));
  //     console.log("after page");
  //     const newMenu = menu.slice(10, menu.length);
  //     console.log("menu", newMenu);
  //     <Menu menu={newMenu} />;
  //   } else {
  //     dispatch(setPage(1));
  //     <Menu menu={menu.slice(0, 10)} />;
  //   }
  // };

  return (
    <div className="nav-order">
      <SectionHeader
        headingOne="Get your food"
        spanOne="delivered"
        headingTwo=", or"
        spanTwo="pick-up"
        headingThree="in store."
      />
      <div className="menu-section">
        <div className="container">
          <div className="home-menu">
            <ButtonList
              cName="menuButton-list"
              menuButton1="Full Menu"
              menuButton2="Burgers"
              menuButton3="Sides"
              menuButton4="Drinks"
            />
            {page === 0 && <Menu menu={menu} category={categoryName} />}
          </div>
          <div className="full-menu-button">
            {/* <Button changePage={changePage} buttonName="Next >" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
