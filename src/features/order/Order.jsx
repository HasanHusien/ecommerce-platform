// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import OrderItem from "./OrderItem.jsx";
import { useDispatch } from "react-redux";
import { fetchAddress } from "../../services/userSlice.js";
import { useEffect } from "react";
import UpdatePriority from "./UpdatePriority.jsx";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna
  //  gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const dispatch = useDispatch();
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load(`/menu`);
  }, [fetcher]);

  return (
    <div className="space-y-4 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="font-semibold">Order #{id} Status</h2>
        <button onClick={() => dispatch(fetchAddress())}>Get position</button>
        <div className="space-x-4">
          {priority && (
            <span className="rounded-full bg-red-600 px-2 py-1 text-sm uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="py-1text-sm rounded-full bg-green-600 px-2 py-1 uppercase tracking-wide text-green-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-5 py-3">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xm text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.id}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher?.data?.find((el) => el.id === item.pizzaId).ingredients ??
              []
            }
          />
        ))}
      </ul>

      <div className="mt-10 space-y-4 bg-stone-200 px-4 py-3">
        <p className="text-sm text-stone-500">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm text-stone-500">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdatePriority order ={order}/>}
    </div>
  );
}
// use params as children more way to get params like useParams hook
export async function Loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
export default Order;
