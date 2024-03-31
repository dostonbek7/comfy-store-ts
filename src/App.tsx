import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Orders,
  Checkout,
  About,
  Products,
  Error,
  SingleProduct,
  Cart,
  Login,
  Register,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productPage } from "./pages/Products";
import { ErrorElement } from "./components";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: productPage,
        },
        {
          path: "/products/:id",
          element: <SingleProduct />,
          loader: singleProductLoader,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        { path: "/about", element: <About /> },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
