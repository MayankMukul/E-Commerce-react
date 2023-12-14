import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

const Applayout = ()=>{
    return(
        <div className="flex flex-col h-screen">
        <Navbar/>
        <Home/>
        <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>)
