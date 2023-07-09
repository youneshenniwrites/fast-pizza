import { To } from "react-router-dom";

type Item = {
  name: string;
  quantity: number;
  totalPrice: number;
};

export type MentuItem = {
  pizza: PizzaItem;
};

export type PizzaItem = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export type CartItem = {
  pizzaId: number;
  unitPrice: number;
} & Item;

export type Order = {
  id: number;
  status: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  estimatedDelivery: string;
  cart: CartItem[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
};

export type getAddress = {
  latitude: number;
  longitude: number;
};

export type OrderItemProps = {
  item: Item;
  isLoadingIngredients?: boolean;
  ingredients?: string[];
};

export type ButtonProps = {
  children: React.ReactNode;
  type: "primary" | "small" | "secondary" | "round";
  disabled?: boolean;
  to?: To;
  onClick?: () => void;
};

export type LinkButtonProps = {
  children: React.ReactNode;
  to: To;
};
