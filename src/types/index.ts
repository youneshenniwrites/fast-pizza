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

export type Pizza = {
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
  cart: Pizza[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
};

export type OrderItem = {
  item: Item;
  isLoadingIngredients: boolean;
  ingredients: string[];
};

export type Item = {
  quantity: number;
  name: string;
  totalPrice: number;
};

export type getAddress = {
  latitude: number;
  longitude: number;
};

export type CartItem = {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
};
