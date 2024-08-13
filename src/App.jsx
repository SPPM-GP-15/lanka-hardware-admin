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
import Dashboard from "./routes/dashboard/Dashboard";
import PostProducts from "./routes/post-products/PostProduct";
import All from "./routes/orders/All";
import New from "./routes/orders/New";
import Pending from "./routes/orders/Pending";
import Completed from "./routes/orders/Completed";
import Cancel from "./routes/orders/Cancel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />}>
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="orders" element={<Orders />}>
        <Route path="all" element={<All />} />
        <Route path="new" element={<New />} />
        <Route path="pending" element={<Pending />} />
        <Route path="completed" element={<Completed />} />
        <Route path="cancel" element={<Cancel />} />
      </Route>
      <Route path="products" element={<Products />} />
      <Route path="users" element={<Users />} />
      <Route path="post-product" element={<PostProducts />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
