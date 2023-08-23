import { ADD_SPONSOR_CODE } from "../types";

export const addSponsor = (usernameSposor) => ({
  type: ADD_SPONSOR_CODE,
  payload: usernameSposor,
});
