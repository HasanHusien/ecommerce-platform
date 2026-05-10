import {
  useDispatch,
  useSelector,
} from "react-redux";
import { clearItem } from "./cartSlice.js";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";


function Cart() {
  const userName = useSelector(
    (state) => state.user.userName,
  );
  const cart = useSelector(
    (state) => state.cart.cart,
  );

  const dispatch = useDispatch();

  if (!cart.length)
    return <EmptyCart />;

  return (
    <div>
      <LinkButton>
        &larr; Back to menu
      </LinkButton>

      <h2 className="px-2 font-semibold">
        Your cart, {userName}
      </h2>
      <ul className="mb-6 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem
            item={item}
            key={item.id}
          />
        ))}
      </ul>
      <div>
        <Button
          type="primary"
          to="/order/new"
        >
          Order pizzas
        </Button>

        <Button
          type="secondary"
          onClick={() =>
            dispatch(clearItem())
          }
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
