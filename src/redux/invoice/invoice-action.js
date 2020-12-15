import { SET_INVOICE_DATA } from "../types";

export const setInvoiceData = (invoiceData) => ({
  type: SET_INVOICE_DATA,
  payload: invoiceData,
});
