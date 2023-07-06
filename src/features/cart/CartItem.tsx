import { formatCurrency } from "../../utils/helpers";

type ItemProps = {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
};

function CartItem({ pizzaId, name, quantity, totalPrice }: ItemProps) {
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
