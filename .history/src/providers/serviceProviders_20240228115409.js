import React from "react";
import { suppliers, productCategories, products } from "../TestData";
export const GetSupplier = (supplier_id) => {
  const supplier = suppliers.find((supplier) => supplier.id === supplier_id);

  // Return the found supplier, or null if not found
  return supplier || null;
};

export const GetCatList = ({ cat_id }) => {
  const filteredCategories = productCategories.filter(
    (category) =>
      category.id === parseInt(cat_id) ||
      category.parent_id === parseInt(cat_id)
  );

  // Extract ids from filteredCategories
  const catIds = filteredCategories.map((category) => category.id);

  // Return the array of category ids
  return catIds;
};
export const GetProductsList = ({ category_id }) => {
  let catList = GetCatList({ category_id });
};
