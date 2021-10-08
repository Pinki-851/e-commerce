import React from "react";
import { connect } from "react-redux";
import Wishlist from "./Wishlist";
import "./Wishlist.css";

const WishlistContainer = (props) => {
  const { wishlistItem } = props;
  console.log({ wishlistItem });
  return (
    <>
      {props.wishlistItem.length === 0 ? (
        <div className="container_head">your wishList is empty now.</div>
      ) : (
        <div>
          <div className="product_container">
            <div className="wrapper wishlist_wrapper">
              {props.wishlistItem.map((val) => {
                console.log({ val });
                return <Wishlist wishlistData={val} key={val.id} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    wishlistItem: state.shop.wishlistItem,
  };
};
export default connect(mapStateToProps)(WishlistContainer);
