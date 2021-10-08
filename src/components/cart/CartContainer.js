import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getTotal,
  getDiscountPriceAction,
  clearCart,
} from "../store/Action/Action.js";
import Cart from "./Cart";
import "./Cart.css";

const CartContainer = (props) => {
  // console.log({ cart: props.cart.length });
  useEffect(() => {
    props.getTotal();
    props.getDiscountPriceAction();
  }, [props.cart]);
  return (
    <div className="product_container">
      <h2 className="product_head">your bag</h2>
      {props.cart.length === 0 ? (
        <p className="product_head"> is currently empty</p>
      ) : (
        <>
          <div className="cart_product_container">
            <div className="count">
              <p>Items:{props.cart.length}</p>
              <p>Total:Rs.{props.total}</p>
            </div>
            {props.cart.map((val) => {
              return <Cart cartdata={val} key={val.id} />;
            })}
            <footer>
              <div className="cart_price_detail">
                <div className="price_label">
                  <p>Total MRP</p>
                  <p>Discount on MRP</p>
                  <p>total</p>
                </div>
                <div className="price_des">
                  <p>Rs.{props.total}</p>
                  <p>- Rs.{props.getDiscountPrice.toFixed(2)}</p>
                  <p>Rs.{props.total}</p>
                </div>
              </div>
            </footer>
          </div>
          <div className="clear_btn">
            <button className="btn" onClick={() => props.clearCart()}>
              clear cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    cart: state.shop.cart,
    total: state.shop.total,
    getDiscountPrice: state.shop.getDiscountPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getTotal: () => dispatch(getTotal()),
    getDiscountPriceAction: () => dispatch(getDiscountPriceAction()),
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
