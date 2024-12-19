import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home"
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPanel from "../pages/AdminPanel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";
import SearchProduct from "../pages/SearchProduct";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import CategoryProduct from "../pages/CategoryProduct";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "admin-panel",
                element: <AdminPanel />,
                children: [
                    {
                        path: "all-users",
                        element: <AllUsers />
                    },
                    {
                        path: "all-products",
                        element: <AllProducts />
                    }
                ]
            },
            {
                path : "search",
                element : <SearchProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : "product-category",
                element : <CategoryProduct/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
        ]
    }
])

export default router