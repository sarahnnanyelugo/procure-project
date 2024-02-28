import React from "react";
import { suppliers, productCategories } from "../TestData";
export const GetSupplier = (supplier_id) => {
  const supplier = suppliers.find((supplier) => supplier.id === supplier_id);

  // Return the found supplier, or null if not found
  return supplier || null;
};

export const GetCatList = ({ cat_id }) => {
  const filteredCategories = productCategories.filter(
    (category) => category.id === cat_id || category.parent_id === cat_id
  );

  // Extract ids from filteredCategories
  const catIds = filteredCategories.map((category) => category.id);

  // Return the array of category ids
  return catIds;
};
