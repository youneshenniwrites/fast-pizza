import {
  ActionFunctionArgs,
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { formatCurrency, isValidPhone } from "../../utils/helpers";
import Button from "../../ui/Button";
import { useAppSelector } from "../../store/hooks";
import { getCartItems, getCartTotalPrice } from "../cart/cartSlice";
import { getUsername } from "../user/userSlice";
import EmptyCart from "../cart/EmptyCart";
import { Order } from "../../types";
import { useState } from "react";

function CreateOrder() {
  const username = useAppSelector(getUsername);
  const cart = useAppSelector(getCartItems);

  const [withPriority, setWithPriority] = useState(false);

  const cartTotalPrice = useAppSelector(getCartTotalPrice);
  const priorityPrice = withPriority ? cartTotalPrice * 0.2 : 0;
  const totalPrice = cartTotalPrice + priorityPrice;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors: any = useActionData();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={String(withPriority)}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing order..."
              : `Order now for ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order: Partial<Order> = {
    ...data,
    cart: JSON.parse(data.cart as string),
    priority: data.priority === "true",
  };

  const errors: any = {};
  if (!isValidPhone(`${order.phone}`))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
