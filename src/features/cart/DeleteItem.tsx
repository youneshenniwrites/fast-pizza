import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({ pizzaId }: { pizzaId: number }) {
  const disptach = useDispatch();

  return (
    <Button type="small" onClick={() => disptach(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
