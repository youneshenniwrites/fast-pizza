import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        {/* renders all nested routes */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
