import { formatCurrency } from "../../utils/helpers";
import { CartItem as CartItemProps } from "../../types";

function CartItem({ pizzaId, name, quantity, totalPrice }: CartItemProps) {
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
