import { useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "./homePageSlice";


function ItemDetail() {
    const { item_id } = useParams();
    // console.log(item_id)
    const list  = useSelector(store =>store.itemList.items );
    // console.log(list);
    const item = list.filter(item=>{
        return item.id == Number(item_id);
    });

    const dispatch = useDispatch();
    const handleaddItem=()=>{
        dispatch(addItem(item[0].id))
        // console.log(item[0].id);
    }
    
    const handleremoveItem=()=>{
        dispatch(removeItem(item[0].id))
        // console.log(item[0].id);
    }

    let itemsincart = useSelector(store=>store.cart.items)
    const elementFound = itemsincart.indexOf(item_id)>=0;
    // console.log(elementFound);
    

    return (
      <div className="container m-auto bg-stone-300">
        <h1 className="text-xl md:font-bold bg-black text-white rounded p-1">
          This is a item Page.
        </h1>
        <div className="flex">
          <img
            src={`${item[0].image}`}
            alt="unable to fetch"
            height="500"
            width="400"
            className="rounded p-1"
          />

          <div className="m-2 ">
            <p>Name : {item[0].item_name}</p>
            <p>Company : {item[0].company}</p>
            <p>Original Price : {item[0].original_price}</p>
            <p>Current Price : {item[0].current_price}</p>
            <p>Rating : {item[0].rating.stars}</p>

        {elementFound ? (
          <button
            className="bg-black text-white rounded m-1 p-1"
            onClick={() => handleremoveItem()}
          >
            Remove
          </button>
        ) : (
          <button
            className="bg-black text-white rounded m-1 p-1"
            onClick={() => handleaddItem()}
          >
            Add to cart
          </button>
        )}
          </div>
        </div>
        {/* <p>{item[0].image}</p> */}

      </div>
    );
}

export default ItemDetail;