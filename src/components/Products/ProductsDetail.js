import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart, moveToWishlist } from "../store/Action/Action.js";
import "./Product.css";

const Productdetail = (props) => {
  console.log({ props });
  const [btnText, setBtnText] = useState("Add To Card");
  return (
    <>
      {props.currentItem.length === 0 ? (
        <div className="product_head con">please choose any product.</div>
      ) : (
        <div className="product_container view_con">
          <div className="card view_card">
            <div className="card_img view_img">
              <img src={props.currentItem.src} alt={props.currentItem.title} />
            </div>
          </div>
          <div className="product_info_view">
            <div className="product_info view_info">
              <div className="product_info_rowfirst product_detail_conatainer_price">
                <p className="pname">{props.currentItem.pname}</p>
                <p className="title">{props.currentItem.title}</p>
              </div>
              <div className="product_info_row_second product_detail_conatainer_price">
                <p className="price">Rs.{props.currentItem.discountPrice}</p>
                <p className="original_price">
                  Rs.{props.currentItem.originalPrice}
                </p>
                <p className="price_off">({props.currentItem.off}% OFF)</p>
              </div>
            </div>
            <p className="description_head">Product description:-</p>
            <p className="description">
              <span>{props.currentItem.info}</span>
            </p>
            <div className="view_btn_section">
              <div className="view_add_btn_section">
                {btnText === "Add To Card" ? (
                  <button
                    className="btn view_btn"
                    onClick={() => {
                      setBtnText("Go To Bag");
                      props.addToCart(props.currentItem.id);
                    }}
                  >
                    {btnText}
                  </button>
                ) : (
                  <button
                    className="btn view_btn"
                    onClick={() => {
                      props.history.push("/cart");
                      setBtnText("Go To Bag");
                    }}
                  >
                    {btnText}
                  </button>
                )}
              </div>
              <div className="view_btn">
                <button
                  className="btn view_btn"
                  onClick={() => {
                    props.history.push("/wishlist");
                    props.moveToWishlist(props.currentItem.id);
                  }}
                >
                  Move To Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    currentItem: state.shop.currentItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch);
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    moveToWishlist: (id) => dispatch(moveToWishlist(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productdetail);
