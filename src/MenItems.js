import { useSelector } from 'react-redux';
import ItemCard from './ItemCard';

const MenItems = ()=>{
    
    const itemslist = useSelector(store =>store.itemList.items );

    const mensItemList = itemslist.filter(item=>item.tags=='mens');

    return (
      <div className="container m-auto bg-stone-50">
        <div className="flex flex-wrap justify-center m-auto">
          {mensItemList.map((item) => {
            return <ItemCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
}

export default MenItems;