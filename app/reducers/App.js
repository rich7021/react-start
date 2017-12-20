import React from "react";
import HeroPage from "../Components/heroPage/HeroPage";

import { GO_PAGE, SHOW_MODAL, CLOSE_MODAL } from "../actions/App";
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

const modal_initialState = {
  active: ""
};
export const Modal = function(state = modal_initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { active: "active" };
    case CLOSE_MODAL:
      return { active: "" };
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
