const showReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return action.payload;
    default:
      return state;
  }
};

export default showReducer;
