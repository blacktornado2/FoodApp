import axios from "../components/api/axios";

export const fetchMenu = (category) => async (dispatch) => {
  const response = await axios.get(`${category}.json`);

  let payload;
  if (category === "menu") {
    payload = response.data["menu-items"];
  } else {
    payload = response.data;
  }
  dispatch({
    type: "FETCH_MENU",
    payload: payload,
  });
};

export const setPage = (page) => {
  return {
    type: "SET_PAGE",
    payload: page,
  };
};

export const setCategory = (category) => {
  return {
    type: "SELECTED_CATEGORY",
    payload: category,
  };
};

export const updateQuantity = (cart_item, quantity) => {
  cart_item.quantity = quantity;
  return {
    type: "UPDATE_QUANTITY",
    payload: quantity,
  };
};

export const addItemToCart = (cart_item) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: cart_item,
  };
};

export const showCart = (status) => {
  return {
    type: "SHOW_CART",
    payload: status,
  };
};

export const calculateSubTotal = () => {
  return {
    type: "CALCULATE_SUB_TOTAL",
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: item,
  };
};
