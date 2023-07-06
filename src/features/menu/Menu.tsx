import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem, { PizzaItem } from "./MenuItem";

function Menu() {
  // TODO: type the Menu properly
  const menu: any = useLoaderData();
  return (
    <ul>
      {menu.map((pizza: PizzaItem) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  return await getMenu();
}

export default Menu;
