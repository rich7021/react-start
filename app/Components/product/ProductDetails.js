import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { hideProductDetails } from "../../actions/Product";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { actions, activate } = this.props;
    return (
      <div className={"modal-bg " + activate}>
        <div id="product-details" className="modal-content">
          <div id="profile">
            <img
              className="product-list-img"
              src={require("../../images/HeroPage.jpg")}
              alt="img"
            />
          </div>
          <div id="product-details-header">this is product title</div>
          <div className="content">
            this is product details<br />
            this is product details<br />this is product details<br />this is
            product details<br />this is product details<br />this is product
            details<br />this is product details<br />this is product details<br />this
            is product details<br />this is product details<br />this is product
            details<br />this is product details<br />this is product details<br />this
            is product details<br />this is product details<br />this is product
            details<br />this is product details<br />this is product details<br />this
            is product details<br />this is product details<br />this is product
            details<br />this is product details<br />this is product details<br />
            <span onClick={() => this.props.actions.hideProductDetails()}>
              close
            </span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activate: state.ProductDetails.active };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { hideProductDetails: hideProductDetails },
      dispatch
    )
  };
}

ProductDetails = connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

export default ProductDetails;
