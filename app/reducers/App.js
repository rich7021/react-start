import React from "react";
import HeroPage from "../Components/HeroPage";
import { GO_PAGE } from "../actions/App";

const initialState = {
  page: <HeroPage />
};

export const App = function(state = initialState, action) {
  switch (action.type) {
    case GO_PAGE:
      return { page: action.page };
    default:
      return initialState;
  }
};
