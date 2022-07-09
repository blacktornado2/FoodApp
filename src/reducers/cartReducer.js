if (!localStorage.getItem("cart-items"))
  localStorage.setItem("cart-items", JSON.stringify([]));

let storedItems = JSON.parse(localStorage.getItem("cart-items"));

const initialState = {
  itemCount: storedItems.length,
  cartItems: storedItems,
  cost: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      storedItems = JSON.parse(localStorage.getItem("cart-items"));
      storedItems.push(action.payload);
      localStorage.setItem("cart-items", JSON.stringify(storedItems));
      return {
        ...state,
        itemCount: state.itemCount + 1,
        cartItems: storedItems,
      };

    case "REMOVE_ITEM_FROM_CART":
      const updatedCart = state.cartItems.filter(
        (itemInCart) => itemInCart.name !== action.payload.name
      );
      localStorage.setItem("cart-items", JSON.stringify(updatedCart));
      return {
        ...state,
        cartItems: [...updatedCart],
        itemCount: state.itemCount - 1,
        cost: (
          state.cost -
          parseFloat(action.payload.price) * action.payload.quantity
        ).toFixed(2),
      };

    case "CALCULATE_SUB_TOTAL":
      let subTotal = 0;
      const updatedItems = JSON.parse(localStorage.getItem("cart-items"));
      updatedItems.forEach((updatedItem) => {
        subTotal +=
          parseFloat(updatedItem.price) * parseInt(updatedItem.quantity);
      });
      subTotal = subTotal.toFixed(2);
      return {
        ...state,
        cost: subTotal,
      };

    default:
      return { ...state };
  }
};

export default cartReducer;
