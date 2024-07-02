import { Category } from "./category";

export interface Product {
  id: string;
  category_id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: Number;
  description: String;
  categories?: Category[];
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}