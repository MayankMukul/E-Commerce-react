import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import {Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement";
import BagElement from "./BagElement.js";

const Applayout = ()=>{
    return(
        <div className="flex flex-col h-screen">
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        errorElement:<ErrorElement/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/bag",
                element:<BagElement/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
