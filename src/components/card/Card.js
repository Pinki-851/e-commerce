import React from "react";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  handleWishlistState,
  moveToWishlist,
  viewMore,
  removeFromWishlist,
} from "../store/Action/Action.js";
import { connect } from "react-redux";
import "./Card.css";
import { BsHeartFill, BsHeart } from "react-icons/bs";

const Card = (props) => {
  const productDetailHitory = useHistory();
  console.log("card", props);

  const handleWishlistArray = (index, products) => {
    console.log("onclick", { index, products });
    const currentCardObj = products[index];
    currentCardObj.wishlistState = !currentCardObj.wishlistState;
    const newArray = [
      ...products.slice(0, index),
      currentCardObj,
      ...products.slice(index + 1, products.length),
    ];
    props.handleWishlistState(newArray);
    console.log({ newArray });
  };
  const handleWishlistBtnValue = (index, products) => {
    const currentCardObj = products[index];
    currentCardObj.wishlistState = !currentCardObj.wishlistState;
    currentCardObj.wishlistBtnValue = "wishlisted";
    const newArray = [
      ...products.slice(0, index),
      currentCardObj,
      ...products.slice(index + 1, products.length),
    ];
    props.handleWishlistState(newArray);
  };
  const handleWishlistedBtnValue = (index, products) => {
    const currentCardObj = products[index];
    currentCardObj.wishlistState = !currentCardObj.wishlistState;
    currentCardObj.wishlistBtnValue = "wishlist";
    const newArray = [
      ...products.slice(0, index),
      currentCardObj,
      ...products.slice(index + 1, products.length),
    ];
    props.handleWishlistState(newArray);
  };

  return (
    <div
      className="card"
      // onClick={() => {
      //   props.viewMore(props.productData.id);
      //   productDetailHitory.push("/productdetail");
      // }}
    >
      <div className="card_img_con">
        <img
          src={props.productData.src}
          alt={props.productData.title}
          onClick={() => {
            props.viewMore(props.productData.id);
            productDetailHitory.push("/productdetail");
          }}
        />
      </div>
      <div className="product_info">
        <div className="product_info_rowfirst">
          <p className="pname">{props.productData.pname}</p>
          <div className="wishlist">
            {props.wishlistState ? (
              <>
                <BsHeartFill
                  className="wishlist_icon wishlist_icon_background"
                  onClick={() => {
                    handleWishlistArray(props.index, props.products);
                    props.removeFromWishlist(props.productData.id);
                  }}
                />
              </>
            ) : (
              <BsHeart
                className="wishlist_icon"
                onClick={() => {
                  handleWishlistArray(props.index, props.products);
                  props.moveToWishlist(props.productData.id);
                }}
              />
            )}
          </div>
        </div>
        <div className="wishlist_desktop">
          {props.wishlistState ? (
            <div
              className="wishlist_desktop_btn"
              onClick={() => {
                handleWishlistedBtnValue(props.index, props.products);
                props.removeFromWishlist(props.productData.id);
              }}
            >
              {props.productData.wishlistBtnValue}
            </div>
          ) : (
            <div
              className="wishlist_desktop_btn"
              onClick={() => {
                handleWishlistBtnValue(props.index, props.products);
                props.moveToWishlist(props.productData.id);
              }}
            >
              {props.productData.wishlistBtnValue}
            </div>
          )}
        </div>

        <div className="product_info_row_second">
          <p className="price">Rs.{props.productData.discountPrice}</p>
          <p className="original_price">Rs.{props.productData.originalPrice}</p>
          <p className="price_off">({props.productData.off}% OFF)</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    viewMore: (id) => dispatch(viewMore(id)),
    moveToWishlist: (id) => dispatch(moveToWishlist(id)),
    handleWishlistState: (value) => dispatch(handleWishlistState(value)),
    removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
