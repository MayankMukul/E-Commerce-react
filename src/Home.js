import DATA from "../CONSTANT/CONST_DATA.js";
import { useEffect, useState } from "react";

const Home =()=>{
    const [data, setdata]= useState([]);

    const getdata=()=>{
        // console.log(DATA.items)
        setdata(DATA.items);
    }
    useEffect(()=>getdata(),[]);

    const  ItemCard=(props)=>{
            console.log(props)
            return(
                <div className="bg-stone-300 m-2 w-52">
                <h1>Name : {props.item.item_name}</h1>
                <p>Company : {props.item.company}</p>
                <p>Price : {props.item.current_price}</p>
                <button className="bg-black text-white m-2 p-1 rounded w-2/3 ">Add</button>
                </div>
            )
        
       
    }

    return (
        <div className="container m-auto bg-stone-50">
            <div className="flex flex-wrap justify-center m-auto ">
                { 
                    data.map((item)=>{
                        return(
                        // <p key={item.id}>{item.item_name} </p>
                        <ItemCard item={item} key={item.item_id}/>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Home;