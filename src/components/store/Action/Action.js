export const addToCart = (itemId) => {
  // console.log("addtocart");
  return {
    type: "ADD_TO_CART",
    payload: { id: itemId },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { id: itemId },
  };
};

export const decrease = (id) => {
  // console.log("decraese action", id);
  return {
    type: "DECREASE",
    payload: id,
  };
};

export const increase = (id) => {
  // console.log("incraese action", id);
  return {
    type: "INCREASE",
    payload: id,
  };
};
export const viewMore = (id) => {
  // console.log({ view: id });
  return {
    type: "VIEW_MORE",
    payload: id,
  };
};
export const adjustQty = (itemId, value) => {
  return {
    type: "ADJUST_QTY",
    payload: { id: itemId, qty: value },
  };
};
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

export const getTotal = () => {
  return {
    type: "GET_TOTAL",
  };
};
export const getDiscountPriceAction = () => {
  return { type: "GET_DISCOUNT_PRICE_ACTION" };
};
export const moveToWishlist = (id) => {
  return {
    type: "MOVE_TO_WISHLIST",
    payload: id,
  };
};
export const removeFromWishlist = (id) => {
  // console.log("removefromwishlist", id);
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  };
};
export const handleWishlistState = (value) => {
  // console.log("handle", value);
  return { type: "HANDLE_WISHLIST_STATE", payload: value };
};
