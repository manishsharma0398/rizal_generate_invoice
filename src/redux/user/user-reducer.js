import { SET_CURRENT_USER, SET_USER_ERROR } from "../types";

const initialState = {
  currentUser: null,
  errors: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    case SET_USER_ERROR:
      return { ...state, errors: payload };

    default:
      return state;
  }
};

export default userReducer;
