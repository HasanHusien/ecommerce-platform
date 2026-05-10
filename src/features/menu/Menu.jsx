import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem.jsx";
function Menu() {
  const menu = useLoaderData();
  
  return (
    <ul className="divide-y-2 divide-stone-200">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
//normal fetching data form api
export async function Loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
