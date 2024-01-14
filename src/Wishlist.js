import React from 'react';
import { useSelector } from "react-redux";
import ItemCard from './ItemCard';

export default function Wishlist() {
    const wishlist = useSelector(store => store.wishList.items);
    // console.log(wishlist);
    const storeList = useSelector(store=> store.itemList.items);
    // console.log(storeList)

    const itemOnWishlist = storeList.filter(item=>{
        let index = wishlist.indexOf(item.id);
        return (index>=0)?true:false;
    });
    // console.log(itemOnWishlist)
    
  return (
    <div className="m-auto w-2/3 bg-stone-100">
      Wishlist
      <div className="flex  m-auto">
        {itemOnWishlist.map((item) => {
          return <ItemCard item={item} key={item.id}></ItemCard>;
        })}
      </div>
      {wishlist.length > 0 ? (
        <>
        <button className='bg-black text-white rounded p-1 float-right m-4'>Add to Cart</button>
        <button className='bg-black text-white rounded p-1 float-right m-4'>Clear Wishlist</button>
        </>
      ) : (
        <h1 className='italic text-center m-1 p-1'>Add item to wishlist.</h1>
      )}
    </div>
  );
}
