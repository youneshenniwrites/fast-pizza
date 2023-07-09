import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({
  pizzaId,
  cartItemQuantity,
}: {
  pizzaId: number;
  cartItemQuantity: number;
}) {
  const disptach = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => disptach(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{cartItemQuantity}</span>
      <Button
        type="round"
        onClick={() => disptach(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
