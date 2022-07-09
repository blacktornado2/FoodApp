const updateReducer = (state = 1, action) => {
  switch (action.type) {
    case "UPDATE_QUANTITY":
      // action.payload1.quantity = parseInt(action.payload2);
      return action.payload;
    default:
      return state;
  }
};

export default updateReducer;
