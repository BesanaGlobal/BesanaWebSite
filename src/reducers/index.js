import { combineReducers } from "redux";
import { shoppingReducer } from "./shoppingReducer";
import { userReducer } from "./userReducer";

const reducer = combineReducers({
  shopping: shoppingReducer,
  user: userReducer,
});

export default reducer;
