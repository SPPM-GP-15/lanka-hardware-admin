import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Orders from "./routes/orders/Orders";
import Products from "./routes/products/Products";
import Users from "./routes/users/Users";
import Initial from "./routes/initial/Initial";
import NotFound from "./routes/not-found/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Initial />}>
      <Route path="home" element={<Home />} />
      <Route
        path="Orders"
        element={<Orders />}
        // loader={({ request }) =>
        //   fetch("/api/dashboard.json", {
        //     signal: request.signal,
        //   })
        // }
      />
      <Route path="products" element={<Products />} />
      <Route path="users" element={<Users />} />

      <Route path="*" element={<NotFound />} />

      {/* <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} loader={redirectIfUser} />
        <Route path="logout" action={logoutUser} />
      </Route> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
