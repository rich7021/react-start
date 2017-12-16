import React from "react";

export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GO_PAGE = "GO_PAGE";

export const showModal = function() {
  return {
    type: SHOW_MODAL
  };
};

export const closeModal = function() {
  return {
    type: CLOSE_MODAL
  };
};

export const goPage = function(page) {
  return {
    type: GO_PAGE,
    page
  };
};
