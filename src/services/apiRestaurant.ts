import { Order } from "../types";

export async function getMenu() {
  const res = await fetch(`${import.meta.env.VITE_BASE_ORDER_URL}/menu`);

  //* fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export async function getOrder(id: string) {
  const res = await fetch(`${import.meta.env.VITE_BASE_ORDER_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder: Partial<Order>): Promise<Order> {
  try {
    const res = await fetch(`${import.meta.env.VITE_BASE_ORDER_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(id: string, updateObj: object) {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_ORDER_URL}/order/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(updateObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw Error();
    //* We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
