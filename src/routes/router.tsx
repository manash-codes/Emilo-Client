import { createBrowserRouter, Navigate, type RouteObject } from "react-router"
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Dashboard from "@/pages/dashboard";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to={"/dashboard"} />
    },
    {
        path: "/auth",
        children: [
            {
                path: "login",
                Component: Login
            },
            {
                path: "register",
                Component: Register
            }
        ]
    },
    {
        path: "/dashboard",
        index: true,
        Component: Dashboard
    }
]

const router = createBrowserRouter(routes, {
    basename: "/"
})

export default router;