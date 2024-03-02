import { useParams } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "./homePageSlice";
import { addToWishList, removeFromWishList } from './wishlistSlice';
import { GoHeart } from "react-icons/go";


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

    const handleAddtoWishlist = ()=>{
      dispatch(addToWishList(item[0].id))
    }

    const handleRemovefromWishlist=()=>{
      dispatch(removeFromWishList(item[0].id))
    }

    let itemsincart = useSelector(store=>store.cart.items)
    const elementFound = itemsincart.indexOf(item_id)>=0;
    const wishlist = useSelector(store => store.wishList.items);
    const wishlistelementfound = wishlist.indexOf(item_id)>=0;
    // console.log(elementFound);
    

    return (
      <div className="container m-auto bg-stone-300 p-3 rounded">
        {/* <h1 className="text-xl md:font-bold bg-black text-white rounded p-2">
          {item[0].company}
        </h1> */}
        <div className="flex">
          <img
            src={`${item[0].image}`}
            alt="unable to fetch"
            height="400"
            width="350"
            className="rounded p-1"
          />

          <div className="m-2 ">
            <p className="text-xl md:font-bold">{item[0].company}</p>
            <p className="text-xl md:font-bold">{item[0].item_name}</p>
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

{wishlistelementfound ? (
                <button
                  className="bg-red-300 p-1 m-1 rounded-xl"
                  onClick={() => handleRemovefromWishlist()}
                >
                  <GoHeart />
                </button>
              ) : (
                <button
                  className=" p-1 m-1 rounded"
                  onClick={() => handleAddtoWishlist()}
                >
                  <GoHeart />
                </button>
              )}
          </div>
        </div>
        {/* <p>{item[0].image}</p> */}

      </div>
    );
}

export default ItemDetail;