import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const SearchElement = () =>{
    const params= useParams();
    const searchText = params.name;

    const itemslist = useSelector(store =>store.itemList.items );
console.log(itemslist)
    const item = itemslist.filter(item=>item.item_name==searchText);
    console.log(item)
;
    return (
      <div className="container mx-auto my-5 bg-stone-50">
        <h1 className="text-center p-1 rounded bg-black text-white">
          Showing search result for "{searchText}"
        </h1>
        <div className="flex flex-wrap justify-center mx-auto my-5">
          <span>No Result found for "{searchText}"</span>
        </div>
      </div>
    );
}

export default SearchElement;