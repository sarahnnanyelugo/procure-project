import React from "react";
import { suppliers, productCategories } from "../TestData";
export const GetSupplier = (supplier_id) => {
  const supplier = suppliers.find((supplier) => supplier.id === supplier_id);

  // Return the found supplier, or null if not found
  return supplier || null;
};
export const GetCatList = ({ cat_id }) => {};
