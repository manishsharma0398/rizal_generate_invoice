import jsPDF from "jspdf";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import TextInput from "../form-inputs/TextInput";
import { setInvoiceData } from "../../redux/invoice/invoice-action";

class InvoiceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // page: 1,
      // buyerEmail: "",
      // buyerphoneNo: "",
      // buyer: "",
      // buyerAddress: "",
      // buyerState: "",
      // buyerGstNo: "",

      // productName: "",
      // productCode: "",
      // productQuantity: "",
      // productRate: "",
      // centerGST: 18,
      // stateGST: 18,

      buyer: "BP & SONS",
      buyerAddress: "Jaduvitta, Milan More, P.O - Champasari",
      buyerEmail: "sbinay4242@gmail.com",
      buyerGstNo: "",
      buyerState: "West Bengal",
      buyerphoneNo: "7896547845",
      centerGST: 18,
      page: 1,
      productCode: "1454asdf",
      productName: "Mint Flavour Chips",
      productQuantity: "67",
      productRate: "51",
      stateGST: 18,
    };
  }

  generateInvoice = (e) => {
    e.preventDefault();
    // window.open(this.makeHref("/invoice"));
    <Redirect to="/invoice" />;
  };

  generateInvoices = (e) => {
    e.preventDefault();
    console.log(this.state);
    // this.setState({ page: 3 });
    // this.props.history.push("/invoice");

    const { userDetails } = this.props;
    const { phoneNo, email, name, address, gstNo, state } = userDetails;

    const doc = new jsPDF();

    doc.text(`Mob: ${phoneNo}`, 200, 20, null, null, "right");
    doc.text(`${email}`, 200, 27, null, null, "right");

    doc.text(`Tax Invoice`, 105, 40, null, null, "center");

    // doc.setLineWidth(0.5);
    // doc.line(20, 50, 200, 50);

    const sellerDetails =
      name +
      "\n" +
      address +
      "\n" +
      "GST IN/UIN:" +
      gstNo +
      "\n" +
      "State Name:" +
      state;

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

    const buyerDetails =
      buyer +
      "\n" +
      buyerAddress +
      "\n" +
      "GST IN/UIN:" +
      buyerGstNo +
      "\n" +
      "State Name:" +
      buyerState;

    doc.cell(20, 60, 100, 45, sellerDetails);
    doc.cell(20, 105, 100, 65, buyerDetails);
    // doc.cell(105, 60, 80, 20, "hello");

    doc.table(20, 60, [{ sellerDetails }]);

    doc.save("invoice.pdf");
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
          {/* {page === 3 && <MyDocument />} */}
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
                  // this.generateInvoice(e);
                  // <Redirect to="/invoice" />;
                  this.props.setInvoice(this.state);
                  this.props.history.push("/invoice");
                  // window.open("/invoice", "_blank").focus();
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

const mapStateToProps = (state) => ({
  userDetails: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setInvoice: (data) => dispatch(setInvoiceData(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(InvoiceForm)
);
