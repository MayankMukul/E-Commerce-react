import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const SearchElement = () =>{
    const params= useParams();
    const searchText = params.name.toLowerCase();

    const itemslist = useSelector(store =>store.itemList.items );
    const item = itemslist.filter(item=>item.item_name.toLowerCase().includes(searchText));
    
    return (
      <div className="container mx-auto my-5 bg-stone-50">
        <h1 className="text-center p-1 rounded bg-black text-white">
          Showing search result for "{searchText}"
        </h1>
        <div className="flex flex-wrap justify-center mx-auto my-5">
            {
                (item.length>0)?
                    item.map((item)=>{
                        return <ItemCard key={item.id} item={item}/>
                    })
                :
                <span>No Result found for "{searchText}"</span>

            }
        </div>
      </div>
    );
}

export default SearchElement;