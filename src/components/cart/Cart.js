import React from "react";
import { connect } from "react-redux";
import {
  clearCart,
  decrease,
  increase,
  moveToWishlist,
  removeFromCart,
} from "../store/Action/Action.js";
import { RiDeleteBinFill } from "react-icons/ri";
import "./Cart.css";

const Cart = (props) => {
  return (
    <>
      <div className="cart_container">
        <div className="cart_card">
          <div className="cart_img_con">
            <img src={props.cartdata.src} alt={props.cartdata.title} />
          </div>
        </div>
        <div className="product_summury">
          <div className="cart_product_info">
            <p className="pname">{props.cartdata.pname}</p>
            <div className="product_price_detail">
              <div className="product_info_row_second">
                <p className="price">Rs.{props.cartdata.discountPrice}</p>
                <p className="original_price">
                  Rs.{props.cartdata.originalPrice}
                </p>
                <p className="price_off">({props.cartdata.off}% OFF)</p>
              </div>
            </div>
            <p
              className="cart_wishlist"
              onClick={() => {
                props.moveToWishlist(props.cartdata.id);
                props.removeFromCart(props.cartdata.id);
              }}
            >
              move to wishlist
            </p>
          </div>
          <div className="cart_btn_section">
            <button
              className="cart_btn"
              onClick={() => props.increase(props.cartdata.id)}
            >
              +
            </button>

            <p className="quantity">{props.cartdata.amount}</p>
            <button
              className="cart_btn"
              onClick={() => {
                props.cartdata.amount === 1
                  ? props.removeFromCart(props.cartdata.id)
                  : props.decrease(props.cartdata.id);
              }}
            >
              -
            </button>
          </div>
          <div className="cart_move_section">
            <p
              className="remove"
              onClick={() => props.removeFromCart(props.cartdata.id)}
            >
              <RiDeleteBinFill className="remove_cart_icon" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    decrease: (id) => dispatch(decrease(id)),
    clearCart: () => dispatch(clearCart()),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    increase: (id) => dispatch(increase(id)),
    moveToWishlist: (id) => dispatch(moveToWishlist(id)),
  };
};
export default connect(null, mapDispatchToProps)(Cart);
