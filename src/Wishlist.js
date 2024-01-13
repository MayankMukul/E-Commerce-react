import React from 'react';
import { useSelector } from "react-redux";
import ItemCard from './ItemCard';

export default function Wishlist() {
    const wishlist = useSelector(store => store.wishList.items);
    console.log(wishlist);
    const storeList = useSelector(store=> store.itemList.items);
    // console.log(storeList)

    const itemOnWishlist = storeList.filter(item=>{
        let index = wishlist.indexOf(item.id);
        return (index>=0)?true:false;
    });
    // console.log(itemOnWishlist)
    
  return (
    <div className='m-auto w-2/3'>
            Wishlist
        <div className='flex bg-stone-100 m-auto'>
            {
                itemOnWishlist.map((item)=>{
                    return( <ItemCard item={item} key={item.id}></ItemCard> )
                })
            }
        </div>
    </div>
  )
}
