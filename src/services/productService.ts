import { ProductsCategory } from "../types";
export const fetchProducts = async (): Promise<ProductsCategory[]> => {
  const response = await fetch('/data.json');
  const { productCategories } = await response.json();
  return productCategories;
}