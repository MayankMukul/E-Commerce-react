import DATA from "../CONSTANT/CONST_DATA.js";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./homePageSlice.js";

const Home =()=>{
    const [data, setdata]= useState([]);
    const dispatch = useDispatch();

    const getdata=()=>{
        setdata(DATA.items);
    }
    useEffect(()=>getdata(),[]);

    let store = useSelector(store=>store.cart.items)
    // console.log(store);
    
    

    const handleAddItem = (item)=>{
        // console.log('itemclicked',item)
        dispatch(addItem(item));
    }
    
    const handleRemoveItem = (item)=>{
        // console.log('itemclicked',item)
        dispatch(removeItem(item));
    }

    let items = useSelector(store=>store.cart.items)
    
    const  ItemCard=(props)=>{
        // console.log(props.item.id)
        // console.log(items);
        const elementFound = items.indexOf(props.item.id)>=0;
        // console.log(elementFound);

            return(
                <div className="bg-stone-300 m-2 w-52">
                <h1>Name : {props.item.item_name}</h1>
                <p>Company : {props.item.company}</p>
                <p>Price : {props.item.current_price}</p>
                {elementFound?
                <button className="bg-black text-white m-2 p-1 rounded w-2/3 "
                onClick={()=>handleRemoveItem(props.item.id)}>Remove</button>
                :
                <button className="bg-black text-white m-2 p-1 rounded w-2/3 "
                onClick={()=>handleAddItem(props.item.id)}>Add</button>
                }
                </div>
            )
        
       
    }

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