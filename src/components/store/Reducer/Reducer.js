import cardData from "../../data/CardData.js";
const initialstate = {
  products: cardData,
  cart: [],
  currentItem: [],
  wishlistItem: [],
  total: 0,
  getDiscountPrice: 0,
};
const shopReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // console.log("add");
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id ? { ...item } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    }

    case "REMOVE_FROM_CART": {
      // console.log("remove");
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    }
    case "HANDLE_WISHLIST_STATE": {
      return { ...state, products: action.payload };
    }
    case "ADJUST_QTY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    }

    case "LOAD_CURRENT_ITEM": {
      return { ...state, currentItem: action.payload };
    }

    case "INCREASE": {
      let increaseItem = state.cart.map((items) => {
        if (items.id === action.payload) {
          items = { ...items, amount: items.amount + 1 };
        }
        return items;
      });
      return { ...state, cart: increaseItem };
    }

    case "DECREASE": {
      let deceraseItem = state.cart.map((items) => {
        // console.log({ id: items.id, actionid: action.payload, items });
        if (items.id === action.payload) {
          items = { ...items, amount: items.amount - 1 };
          console.log({ a: items });
        }
        return items;
      });
      return { ...state, cart: deceraseItem };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "VIEW_MORE": {
      let viewMoreitem = state.products.find((items) => {
        // console.log({ viewreducer: items });
        if (items.id === action.payload) {
          // console.log({ viewIf: items });
          items = { ...items };
          return items;
        }
      });
      return { ...state, currentItem: viewMoreitem };
    }

    case "MOVE_TO_WISHLIST": {
      // console.log("wish");
      let wishlist = state.products.find(
        (items) => items.id === action.payload
      );
      let inWishList = state.wishlistItem.find((items) =>
        items.id === action.payload ? true : false
      );
      return {
        ...state,
        wishlistItem: inWishList
          ? state.wishlistItem.map((items) =>
              items.id === action.payload ? { ...items } : items
            )
          : [...state.wishlistItem, { ...wishlist }],
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      // console.log("removewishlist");
      return {
        ...state,
        wishlistItem: state.wishlistItem.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
    case "GET_TOTAL": {
      // console.log("getTotal");
      let { total } = state.cart.reduce(
        (cartTotal, items) => {
          // console.log({ items }, cartTotal);
          const { discountPrice, amount } = items;
          const itemTotal = discountPrice * amount;
          cartTotal.total += itemTotal;

          return cartTotal;
        },
        { total: 0 }
      );
      // console.log({ total });
      return { ...state, total: total };
    }
    case "GET_DISCOUNT_PRICE_ACTION": {
      console.log("discount");
      let displayDiscount = 0;
      state.cart.forEach((items) => {
        // console.log({ items });
        const { originalPrice, discountPrice, amount } = items;
        const off = originalPrice - discountPrice;
        const discountTotal = off * amount;
        displayDiscount += discountTotal;
        // console.log("discount", { displayDiscount });
      });
      return { ...state, getDiscountPrice: displayDiscount };
    }

    default:
      return state;
  }
};
export default shopReducer;
