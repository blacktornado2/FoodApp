import React from "react";
import Button from "./Button";
import arrow from "../assets/images/Drawn-Arrow.svg";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "./ItemCard";
import { showCart } from "../actions";

const Cart = () => {
  const dispatch = useDispatch();
  const cost = useSelector((state) => state.cart.cost);
  const show = useSelector((state) => state.show);
  const itemCount = useSelector((state) => state.cart.itemCount);
  const cartItems = JSON.parse(localStorage.getItem("cart-items"));

  return (
    <div>
      {show && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Your Order</h4>
              <button
                onClick={() => dispatch(showCart(false))}
                className="close-cart"
              >
                X
              </button>
            </div>
            <div className="cart-content">
              {itemCount === 0 ? (
                <div className="empty-cart">
                  <div>We couldn't find any items in your cart.</div>
                  <div className="go-to-order">
                    <Button goto="/order" buttonName="Start an Order" />
                    <img className="arrow-img" src={arrow} alt="" />
                  </div>
                </div>
              ) : (
                <div className="non-empty-cart">
                  <div className="modal-body">
                    {cartItems.map((cartItem) => (
                      <ItemCard menu_item={cartItem} />
                    ))}
                  </div>
                  <div className="modal-footer">
                    <div className="sub-total">
                      <div>Subtotal</div>
                      <div className="total-money">{`$ ${cost} USD`}</div>
                    </div>
                    <button className="button">Continue to Checkout</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
