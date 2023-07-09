import CartItem from "./CartItem";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { useAppSelector } from "../../store/hooks";
import { clearCart, getCartItems } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import { useDispatch } from "react-redux";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useAppSelector(getUsername);
  const cart = useAppSelector(getCartItems);
  const disptach = useDispatch();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => disptach(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
