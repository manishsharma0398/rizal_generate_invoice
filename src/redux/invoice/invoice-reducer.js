import { SET_INVOICE_DATA } from "../types";

const initialState = {
  invoiceData: null,
};

const invoiceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INVOICE_DATA:
      return { ...state, invoiceData: payload };

    default:
      return state;
  }
};

export default invoiceReducer;
