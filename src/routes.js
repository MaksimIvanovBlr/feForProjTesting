import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BUDGET_ROUTE,
    DAILY_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATOIN_ROUTE,
    USER_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import Budget from "./pages/Budget";
import User from "./pages/User";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:USER_ROUTE,
        Component: User
    },
    {
        path:BUDGET_ROUTE,
        Component: Budget
    },

    {
        path:DAILY_ROUTE,
        Component: Daily
    },
]

export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },{
        path:REGISTRATOIN_ROUTE,
        Component: Auth
    },
    {
        path:HOME_ROUTE,
        Component: Home
    },
]