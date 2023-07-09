import { formatCurrency } from "../../utils/helpers";
import { CartItem as CartItemProps } from "../../types";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useAppSelector } from "../../store/hooks";
import { getCartItemQuantity } from "./cartSlice";

export default function CartItem({ item }: { item: CartItemProps }) {
  const { name, pizzaId, quantity, totalPrice } = item;

  const cartItemQuantity = useAppSelector(getCartItemQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          cartItemQuantity={cartItemQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}
