import React from "react";
import ReactDOM from "react-dom/client";

const Applayout = ()=>{
    return(
        <>
        <h1>heading from parcel</h1>
        <div className="bg-black">container</div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>)
