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
                <butotn className="bg-black text-white p-1 rounded">Add</butotn>
                </div>
            )
        
       
    }

    return (
        <div className="container bg-stone-50">
            <div className="flex flex-wrap m-5 ">
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