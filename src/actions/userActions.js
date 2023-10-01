import { ADD_SPONSOR_CODE } from "../types";

export const addSponsor = (usernameSposor) => { 
  
  console.log(usernameSposor, 'Action');
  return({
  type: ADD_SPONSOR_CODE,
  payload: usernameSposor,
})
};
