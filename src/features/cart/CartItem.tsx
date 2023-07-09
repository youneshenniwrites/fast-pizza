import { formatCurrency } from "../../utils/helpers";
import { CartItem as CartItemProps } from "../../types";
import DeleteItem from "./DeleteItem";

export default function CartItem({ item }: { item: CartItemProps }) {
  const { name, pizzaId, quantity, totalPrice } = item;
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
