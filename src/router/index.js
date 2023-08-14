import { createBrowserRouter } from "react-router-dom";
import Navbar from '../components/NavBar'
import Products from '../components/Products'
import Cart from '../components/Cart'
export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Navbar />,
            children: [
                {
                    path: "",
                    element: <Products />
                },
                {
                    path: "cart",
                    element:<Cart/>
                }
            ]
        }
    ]
)