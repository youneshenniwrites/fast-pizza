import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { getCartTotalPrice, getCartTotalQuantity } from "./cartSlice";
import { formatCurrency, useCurrentRoute } from "../../utils/helpers";

export default function CartOverview() {
  const totalCartQuantity = useAppSelector(getCartTotalQuantity);
  const totalCartPrice = useAppSelector(getCartTotalPrice);

  const currentRoute = useCurrentRoute();

  if (!totalCartQuantity || currentRoute === "/cart") return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}
