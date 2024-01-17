import DATA from "../CONSTANT/CONST_DATA.js";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addList } from "./itemSlice.js";
import ItemCard from "./ItemCard.js"

const Home =()=>{
    const [data, setdata]= useState([]);
    const dispatch = useDispatch();

    const getdata=()=>{
        setdata(DATA.items);
    }
    
    useEffect(()=>getdata(),[]);

    dispatch(addList(data));

    let store = useSelector(store=>store.cart.items)
    // console.log(store);
    
    

    
    return (
        <div className="container m-auto bg-stone-50">
            <div className="flex flex-wrap justify-center m-auto ">
                { 
                 data.map((item)=>{
                        return <ItemCard key={item.id} item={item}/>
                    })
                }
                
            </div>
        </div>
    )
}

export default Home;