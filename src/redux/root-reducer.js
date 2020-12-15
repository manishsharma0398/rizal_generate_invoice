import { combineReducers } from "redux";
import invoiceReducer from "./invoice/invoice-reducer";
import userReducer from "./user/user-reducer";

export default combineReducers({
  user: userReducer,
  invoice: invoiceReducer,
});
