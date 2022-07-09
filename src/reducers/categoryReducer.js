const categoryReducer = (state = "Burgers", action) => {
  switch (action.type) {
    case "SELECTED_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};
export default categoryReducer;
