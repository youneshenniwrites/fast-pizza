import { formatCurrency } from "../../utils/helpers";
import { CartItem as CartItemProps } from "../../types";

function CartItem({ item }: { item: CartItemProps }) {
  const { name, quantity, totalPrice } = item;
  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
