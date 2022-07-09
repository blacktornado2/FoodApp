import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import pageReducer from "./pageReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import showReducer from "./showReducer";
import updateReducer from "./updateReducer";

export default combineReducers({
  menu: menuReducer,
  page: pageReducer,
  categoryName: categoryReducer,
  cart: cartReducer,
  show: showReducer,
  update: updateReducer,
});
