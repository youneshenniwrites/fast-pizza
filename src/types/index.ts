export type MentuItem = {
  pizza: PizzaItem;
};

export type PizzaItem = {
  id: string;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

export type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type Order = {
  id: string;
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

export type OrderItem = {
  item: Item;
};

type Item = {
  quantity: number;
  name: string;
  totalPrice: number;
};

export type getAddress = {
  latitude: number;
  longitude: number;
};
