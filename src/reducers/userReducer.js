import { ADD_SPONSOR_CODE } from "../types";

export const initialState = {
  sponsor: 'no'
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SPONSOR_CODE: {
      return {
        ...state,
        sponsor: action.payload,
      };
    }
    default:
      return state;
  }
}
