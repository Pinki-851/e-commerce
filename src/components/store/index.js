import React from "react";
import shopReducer from "./Reducer/Reducer";
import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ shop: shopReducer });
const Store = createStore(rootReducer, composeWithDevTools());

export default Store;
