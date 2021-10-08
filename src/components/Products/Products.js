import React, { Component } from "react";
import Card from "../card/Card.js";
import { connect } from "react-redux";
import "./Product.css";

class Products extends Component {
  render() {
    // console.log(this.props);
    const { Products } = this.props;
    // console.log({ Products });
    return (
      <>
        <div className="product_container">
          <h3 className="product_head">Our Products</h3>
          <div className="card_container">
            <div className="wrapper">
              {Products.map((val, index) => {
                return (
                  <Card
                    productData={val}
                    key={val.id}
                    index={index}
                    wishlistState={val.wishlistState}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    Products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
