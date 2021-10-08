import React from "react";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromWishlist,
  viewMore,
} from "../store/Action/Action.js";
import "./Wishlist.css";
import { useHistory } from "react-router";
import { RiDeleteBinFill } from "react-icons/ri";

const Wishlist = (props) => {
  const history = useHistory();
  console.log({ props });
  return (
    <>
      <div className="card">
        <div
          className="remove_wishlist_item"
          onClick={() => props.removeFromWishlist(props.wishlistData.id)}
        >
          <RiDeleteBinFill className="remove_cart_icon" />
        </div>
        <div
          className="card_img_con"
          onClick={() => {
            props.viewMore(props.wishlistData.id);
            history.push("/productdetail");
          }}
        >
          <img src={props.wishlistData.src} alt={props.wishlistData.title} />
        </div>
        <div className="product_info">
          <div className="product_info_rowfirst">
            <p className="pname">{props.wishlistData.pname}</p>
          </div>
          <div className="product_info_row_second">
            <p className="price">Rs.{props.wishlistData.discountPrice}</p>
            <p className="original_price">
              Rs.{props.wishlistData.originalPrice}
            </p>
            <p className="price_off">({props.wishlistData.off}% OFF)</p>
          </div>
        </div>
        <div className="btn_container">
          <button
            className="wishlist_btn"
            onClick={() => {
              props.addToCart(props.wishlistData.id);
              history.push("/cart");
            }}
          >
            move to bag
          </button>
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
    viewMore: (id) => dispatch(viewMore(id)),
  };
};
export default connect(null, mapDispatchToProps)(Wishlist);
