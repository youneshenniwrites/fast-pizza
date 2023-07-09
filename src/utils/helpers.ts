import { useLocation } from "react-router-dom";

export function formatCurrency(value: number | bigint) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "GBP",
  }).format(value);
}

export function formatDate(dateStr: string | number | Date) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr: string | number | Date) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

// TODO ideally this custon hook should be moved to s hooks folder
export function useCurrentRoute() {
  const location = useLocation();
  return location.pathname;
}
