import { createBrowserRouter } from "react-router-dom";
import {Log} from "./home/home.js";
import {Reg} from "./registration/registration.js";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Log />,
    },
    {
        path:"/registration",
        element:<Reg />
    }

]);