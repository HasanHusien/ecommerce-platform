import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './ui/Home.jsx';
import User from "./features/user/CreateUser.jsx";
import Cart from "./features/cart/Cart.jsx";
import Menu, {Loader as menuLoader} from "./features/menu/Menu.jsx";
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder.jsx";
import Order, { Loader as orderLoader } from "./features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import {action as updatePriorityAction} from './features/order/UpdatePriority.jsx';
import Error from "./ui/Error.jsx";

const routers = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/user", element: <User /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updatePriorityAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
