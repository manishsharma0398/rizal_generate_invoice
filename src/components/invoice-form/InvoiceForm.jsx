import React, { Component } from "react";
import TextInput from "../form-inputs/TextInput";

class InvoiceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      buyerEmail: "",
      buyerphoneNo: "",
      buyer: "",
      buyerAddress: "",
      buyerState: "",
      buyerGstNo: "",

      productName: "",
      productCode: "",
      productQuantity: "",
      productRate: "",
      centerGST: 18,
      stateGST: 18,
    };
  }

  generateInvoice = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onInputChange = (e) => {
    this.setState({ [`${e.target.id}`]: e.target.value });
  };

  render() {
    const {
      buyerEmail,
      buyerphoneNo,
      buyer,
      buyerAddress,
      buyerState,
      buyerGstNo,
      page,

      productName,
      productCode,
      productQuantity,
      productRate,
      centerGST,
      stateGST,
    } = this.state;
    return (
      <div className="row col-md-8 mx-auto card mt-5">
        <form onSubmit={this.generateInvoice} className="card-body">
          <h3 className="card-title text-center pb-2">
            {page === 1 ? "Buyer Details" : "Product Details"}
          </h3>
          {page === 1 && (
            <>
              <TextInput
                id="buyer"
                label="Name"
                onChange={this.onInputChange}
                value={buyer}
                invalid=""
                invalidText=""
                placeholder="Buyer Name"
              />
              <TextInput
                id="buyerAddress"
                label="Address"
                onChange={this.onInputChange}
                value={buyerAddress}
                invalid=""
                invalidText=""
                placeholder="Buyer Address"
              />
              <TextInput
                id="buyerEmail"
                required={false}
                label="Email (Optional)"
                onChange={this.onInputChange}
                value={buyerEmail}
                invalid=""
                invalidText=""
                placeholder="Buyer Email Address"
              />
              <TextInput
                id="buyerphoneNo"
                label="Contact No"
                onChange={this.onInputChange}
                value={buyerphoneNo}
                invalid=""
                invalidText=""
                placeholder="Buyer Phone No"
              />
              <TextInput
                id="buyerState"
                label="State"
                onChange={this.onInputChange}
                value={buyerState}
                invalid=""
                invalidText=""
                placeholder="Buyer State"
              />
              <TextInput
                id="buyerGstNo"
                label="GST No"
                onChange={this.onInputChange}
                value={buyerGstNo}
                invalid=""
                invalidText=""
                placeholder="GST Number"
                required={false}
              />
            </>
          )}
          {page === 2 && (
            <>
              <TextInput
                id="productName"
                label="Product"
                onChange={this.onInputChange}
                value={productName}
                invalid=""
                invalidText=""
                placeholder="Product Title/Name"
              />
              <TextInput
                id="productCode"
                label="Product Code"
                onChange={this.onInputChange}
                value={productCode}
                invalid=""
                invalidText=""
                placeholder="Product Code"
              />
              <TextInput
                id="productQuantity"
                type="number"
                label="Product Quantity"
                onChange={this.onInputChange}
                value={productQuantity}
                invalid=""
                invalidText=""
                placeholder="Product Quantity"
              />
              <TextInput
                id="productRate"
                type="number"
                label="Product Rate"
                onChange={this.onInputChange}
                value={productRate}
                invalid=""
                invalidText=""
                placeholder="Product Rate"
              />
              <TextInput
                id="centerGST"
                type="number"
                label="Center GST(in %)"
                onChange={this.onInputChange}
                value={centerGST}
                invalid=""
                invalidText=""
                placeholder="centerGST"
              />
              <TextInput
                id="stateGST"
                type="number"
                label="State GST(in %)"
                onChange={this.onInputChange}
                value={stateGST}
                invalid=""
                invalidText=""
                placeholder="stateGST"
              />
            </>
          )}

          <div className="d-grid mt-2 mb-3 gap-2">
            {page === 2 && (
              <button
                onClick={() => {
                  this.setState({ page: 1 });
                }}
                className="btn btn-primary btn-block"
                type="button"
              >
                Edit Buyer Details
              </button>
            )}
            <button
              onClick={(e) => {
                if (page === 1) {
                  this.setState({ page: 2 });
                } else {
                  this.generateInvoice(e);
                }
              }}
              className="btn btn-primary btn-block"
              type="button"
            >
              {page === 1 ? "Continue" : "Generate Invoice"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InvoiceForm;

// buyer: "BP & SONS"
// buyerAddress: "Jaduvitta, Milan More, P.O - Champasari"
// buyerEmail: "sbinay4242@gmail.com"
// buyerGstNo: ""
// buyerState: "West Bengal"
// buyerphoneNo: "7896547845"
// centerGST: 18
// page: 2
// productCode: "1454asdf"
// productName: "Mint Flavour Chips"
// productQuantity: "67"
// productRate: "51"
// stateGST: 18
