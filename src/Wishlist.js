import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import ItemCard from './ItemCard';
import { clearWishList } from './wishlistSlice';


export default function Wishlist() {
    const wishlist = useSelector(store => store.wishList.items);
    // console.log(wishlist);
    const storeList = useSelector(store=> store.itemList.items);
    // console.log(storeList);
    const cart  = useSelector(store=>store.cart.items);
    // console.log(cart);
    const profile = useSelector(store=> store.profile.items)
    const userName = profile.username;
    const itemOnWishlist = storeList.filter(item=>{
        let index = wishlist.indexOf(item.id);
        return (index>=0)?true:false;
    });
    // console.log(itemOnWishlist)

    const dispatch = useDispatch()

    const handleClearwishlist=()=>{
      dispatch(clearWishList());
    }
    
  return (
    <div className="m-auto w-2/3 bg-stone-100">
      
      <h1 className='w-full bg-black text-white rounded p-2'>{userName}'s Wishlist</h1>
      <div className="flex flex-wrap  m-auto">
        {itemOnWishlist.map((item) => {
          return <ItemCard item={item} key={item.id}></ItemCard>;
        })}
      </div>
      {wishlist.length > 0 ? (
        <button className='bg-black text-white rounded p-1 float-right m-4' 
        onClick={()=>handleClearwishlist()}>Clear Wishlist</button>
      ) : (
        <h1 className='italic text-center m-1 p-1'>Wishlist Empty.</h1>
      )}
    </div>
  );
}
