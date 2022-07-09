/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  updateQuantity,
  calculateSubTotal,
} from "../actions";

const ItemCard = ({ menu_item }) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (e) => {
    dispatch(updateQuantity(menu_item, e.target.value));
    const cartItems = JSON.parse(localStorage.getItem("cart-items"));
    const updatedCartItem = cartItems.map((cartItem) => {
      if (cartItem.name === menu_item.name) {
        return menu_item;
      } else return cartItem;
    });
    localStorage.setItem("cart-items", JSON.stringify(updatedCartItem));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (e.target.value !== "") dispatch(calculateSubTotal());
  };

  const removeItem = () => {
    dispatch(removeItemFromCart(menu_item));
  };

  return (
    <div className="item-card" key={menu_item.name}>
      <a href={menu_item.name} className="item-image">
        <img src={menu_item.image} alt="" />
      </a>
      <div className="card-content">
        <div className="item-content">
          <h6>{menu_item.name}</h6>
          <div className="price">{`$ ${menu_item.price} USD`}</div>
          <a onClick={() => removeItem()} className="remove-item">
            Remove
          </a>
        </div>
        <div className="cart">
          <form onSubmit={handleOnSubmit}>
            <input
              onChange={handleChangeQuantity}
              className="how-much"
              type="text"
              min={1}
              defaultValue={menu_item.quantity}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
