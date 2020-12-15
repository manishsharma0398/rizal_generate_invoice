import React, { Component } from "react";
import { connect } from "react-redux";

class InvoicePDF extends Component {
  render() {
    const { invoiceData, sellerDetails } = this.props;
    return (
      <>
        <div className="row border">
          <div className="col-6 border">
            <span className="fw-bold">{sellerDetails.name}</span>
            <span className="fw-normal d-block">{sellerDetails.address}</span>
            <span className="fw-normal d-block">
              GST IN/UIN: {sellerDetails.gstNo}
            </span>
            <span className="fw-normal d-block">
              State: {sellerDetails.state}
            </span>
          </div>
          <div className="row col-6">
            <>
              <div className="col-6 border">
                <span className="fw-normal d-block">Invoice No.</span>

                <span className="fw-bold">4578gegefg</span>
              </div>
              <div className="col-6 border">
                <span className="fw-normal d-block">Dated</span>

                <span className="fw-bold">12/ Dec 2020</span>
              </div>
            </>
            <>
              <div className="col-6 border">
                <span className="fw-normal d-block">Delivery Note</span>

                <p className="fw-bold d-block"></p>
                <span className="fw-normal d-block">Supplier's Ref.</span>

                <p className="fw-bold"></p>
              </div>
              <div className="col-6 border">
                <span className="fw-normal d-block">Mode/Terms of Payment</span>

                <p className="fw-bold d-block"></p>
                <span className="fw-normal d-block">Other Reference(s)</span>

                <p className="fw-bold d-block"></p>
              </div>
            </>
          </div>
        </div>
        <div className="row border">
          <div className="col-6">
            <span className="fw-bold">{invoiceData.buyer}</span>
            <span className="fw-normal d-block">
              {invoiceData.buyerAddress}
            </span>
            <span className="fw-normal d-block">
              GST IN/UIN: {invoiceData.buyerGstNo}
            </span>
            <span className="fw-normal d-block">
              State: {invoiceData.buyerState}
            </span>
          </div>
          <div className="col-6"></div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  sellerDetails: state.user.currentUser,
  invoiceData: state.invoice.invoiceData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePDF);
