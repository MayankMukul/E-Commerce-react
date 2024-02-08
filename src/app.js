import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import {Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement";
import BagElement from "./BagElement.js";
import { Provider } from 'react-redux';
import store from "./store.js";
import ItemDetail from "./ItemDetail.js"
import MenItems from "./MenItems.js";
import KidsItems from "./KidsItem.js";
import WomenItems from './WomenItems.js';
import Profile from "./Profile.js";
import Wishlist from "./Wishlist.js";
import SearchElement from "./SearchElement.js";

const Applayout = ()=>{
    return (
      <div className="flex flex-col h-screen">
        <Provider store={store}>
          <Navbar />
          <Outlet />
          <Footer />
        </Provider>
      </div>
    );
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
            },{
              path:'/item/:item_id',
              element:<ItemDetail/>
            },{
              path:'/men',
              element:<MenItems/>,
            },{
              path:'/women',
              element:<WomenItems/>,
            },{
              path:'/kids',
              element:<KidsItems/>
            },{
              path:'/profile',
              element:<Profile/>
            },{
              path:'/wishlist',
              element:<Wishlist/>
            },{
              path:'/search/:name',
              element:<SearchElement/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <RouterProvider router={appRouter}></RouterProvider> )
