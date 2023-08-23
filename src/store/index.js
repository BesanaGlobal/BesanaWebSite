import { createStore } from "redux";
import reducer from "../reducers";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(() => {
  saveState({
    shopping: store.getState().shopping,
    user: store.getState().user,
  });
});
export default store;
