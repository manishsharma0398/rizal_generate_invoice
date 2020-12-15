import { SET_CURRENT_USER, SET_USER_ERROR } from "../types";

export const setCurrentUser = (currentUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: currentUser,
  };
};

export const setUserError = (errors) => {
  return {
    type: SET_USER_ERROR,
    payload: errors,
  };
};
