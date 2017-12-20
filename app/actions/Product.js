export const SHOW_PRODUCT_DETAILS = "SHOW_PRODUCT_DETAILS";
export const HIDE_PRODUCT_DETAILS = "HIDE_PRODUCT_DETAILS";

export const showProductDetails = function() {
  return {
    type: SHOW_PRODUCT_DETAILS
  };
};

export const hideProductDetails = function() {
  return {
    type: HIDE_PRODUCT_DETAILS
  };
};
