import React from "react";

export const GO_PAGE = "GO_PAGE";

export const goPage = function(page) {
  return {
    type: GO_PAGE,
    page
  };
};
