import Button from "./Button";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  calculateSubTotal,
  updateQuantity,
  showCart,
} from "../actions";

const MenuCard = ({ menu_item }) => {
  const quantity = useSelector((state) => state.update);
  const dispatch = useDispatch();

  const handleChangeQuantity = (e) => {
    dispatch(updateQuantity(menu_item, e.target.value));
  };

  useEffect(() => {
    dispatch(updateQuantity(menu_item, 1));
    dispatch(calculateSubTotal(menu_item));
  }, [dispatch, menu_item]);

  const addToCart = () => {
    dispatch(showCart(true));
    let cartItems = JSON.parse(localStorage.getItem("cart-items"));
    const seletedItem = cartItems.filter((cartItem) => {
      return cartItem.name === menu_item.name;
    });

    if (!seletedItem[0]) {
      dispatch(addItemToCart(menu_item));
      dispatch(calculateSubTotal(menu_item));
    } else {
      cartItems.forEach((cartItem) => {
        if (cartItem.name === menu_item.name)
          cartItem.quantity = parseInt(cartItem.quantity) + parseInt(quantity);
      });
      localStorage.setItem("cart-items", JSON.stringify(cartItems));
      dispatch(calculateSubTotal(menu_item));
    }
  };

  return (
    <div className="menu-card">
      <a href={menu_item.name} className="menu-image">
        <img src={menu_item.image} alt="" />
      </a>
      <div className="card-content">
        <a href="menu-items.name" className="menu-content">
          <h6>{menu_item.name}</h6>
          <div className="price">{`$ ${menu_item.price} USD`}</div>
        </a>
        <p>{menu_item.description}</p>
        <div className="cart">
          <form>
            <input
              onChange={handleChangeQuantity}
              type="number"
              pattern="^[0-9]+$"
              defaultValue={1}
              min={1}
              className="how-much"
              value={menu_item.quantity}
            />
          </form>

          <Button
            method={showCart}
            addToCart={addToCart}
            cName="cart-button"
            buttonName="Add To Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
