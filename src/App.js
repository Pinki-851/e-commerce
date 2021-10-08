import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import CartContainer from "./components/cart/CartContainer";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/Products/Products";
import ProductDetail from "./components/Products/ProductsDetail";
import WishlistContainer from "./components/wishlist/WishlistContainer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/productdetail" component={ProductDetail} />
        <Route exact path="/wishlist" component={WishlistContainer} />
      </Switch>
    </Router>
  );
};
export default App;
