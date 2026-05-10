import { useSelector } from "react-redux";
import { formatCurrency } from "./../../utils/helpers.js";
import { getCurrentQuantityById } from "./cartSlice.js";
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="px-3 py-3 md:flex md:items-center md:justify-between">
      <p className="mb-1 md:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between md:gap-6">
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
