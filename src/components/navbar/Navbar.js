import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";
const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState();
  useEffect(() => {
    let count = 0;
    // console.log({ cart });
    // console.log({ count });
    cart.forEach((item) => {
      count += item.qty;
      // console.log({ each: count });
    });
    setCartCount(count);
  }, [cart, cartCount]);
  const history = useHistory();
  return (
    <div className="navbar">
      <div className="logo">
        <RiShoppingBasketFill
          className="logo_icon"
          onClick={() => history.push("/")}
        />
      </div>
      <ul>
        <li onClick={() => history.push("/")}>products</li>
        <li onClick={() => history.push("/wishlist")}>WishList</li>
        <li
          onClick={() => history.push("/cart")}
          className="cart_img_container"
        >
          <IoCart className="cart_icon" />
          <div className="cart_count">{cartCount}</div>
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps)(Navbar);
