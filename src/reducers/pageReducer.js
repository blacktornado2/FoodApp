const pageReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return action.payload;
    default:
      return state;
  }
};
export default pageReducer;
