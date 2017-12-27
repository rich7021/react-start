import React from "react";
import HeroPage from "../Components/heroPage/HeroPage";

import { GO_PAGE } from "../actions/App";
import { SHOW_PRODUCT_DETAILS, HIDE_PRODUCT_DETAILS } from "../actions/Product";
const initialState = {
  page: <HeroPage />
};

export const App = function(state = initialState, action) {
  switch (action.type) {
    case GO_PAGE:
      return { page: action.page };
    default:
      return state;
  }
};

export const ProductDetails = function(state = { active: "" }, action) {
  switch (action.type) {
    case SHOW_PRODUCT_DETAILS:
      return { active: "active" };
    case HIDE_PRODUCT_DETAILS:
      return { active: "" };
    default:
      return state;
  }
};
