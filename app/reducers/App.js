import React from "react";
import HeroPage from "../Components/heroPage/HeroPage";

import { GO_PAGE, SHOW_MODAL, CLOSE_MODAL } from "../actions/App";
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
