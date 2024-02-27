import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';

const BeautyItem = ()=>{

    const itemslist = useSelector(store =>store.itemList.items );

    const beautyItemList = itemslist.filter(item=>item.tags=='beauty');

    return (
      <div className="container m-auto bg-stone-50">
        <h1 className="text-center p-1 rounded bg-black text-white ">
          Beauty Items
        </h1>
        <div className="flex flex-wrap justify-center m-auto my-2">
          {beautyItemList.map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
}

export default  BeautyItem;