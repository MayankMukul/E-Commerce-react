import { useSelector } from "react-redux";
import ItemCard from './ItemCard';

const WomenItems=()=> {
    const itemslist = useSelector(store =>store.itemList.items );

    const mensItemList = itemslist.filter(item=>item.tags=='women');

    console.log('womens')
    return ( 
        <div className="container m-auto bg-stone-50">
            <h1 className="text-center my-5">Women Items</h1>
            <div className="flex flex-wrap justify-center m-auto">
          {mensItemList.map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </div>
        </div>
     );
}

export default WomenItems;