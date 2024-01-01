import { useParams } from "react-router-dom"; 
import {useSelector } from "react-redux";

function ItemDetail() {
    const { item_id } = useParams();
    console.log(item_id)
    const list  = useSelector(store =>store.itemList.items );
    // console.log(list);
    const item = list.filter(item=>{
        return item.id == Number(item_id);
    });
    console.log(item[0]);
    console.log(item[0].rating);

    return ( 
        <div className="container m-auto p-2 bg-stone-300">
        <h1>This is a item Page.</h1>
        <p>{item[0].image}</p>
        <p>Name : {item[0].item_name}</p>
        <p>Company : {item[0].company}</p>
        <p>Original Price : {item[0].original_price}</p>
        <p>Current Price : {item[0].current_price}</p>
        <p>Rating : {item[0].rating.stars}</p>
        </div>
     );
}

export default ItemDetail;