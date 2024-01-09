import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem, removeItem } from './homePageSlice.js';

const  ItemCard=(props)=>{

    let items = useSelector(store=>store.cart.items);
      const elementFound = items.indexOf(props.item.id)>=0;
    
      const dispatch = useDispatch();

    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    
    const handleRemoveItem = (item)=>{
        dispatch(removeItem(item));
    }

          return (
            <div className="bg-stone-300 m-2 w-52">
              <Link to={"/item/" + props.item.id}>
                <h1>Name : {props.item.item_name}</h1>
                <p>Company : {props.item.company}</p>
                <p>Price : {props.item.current_price}</p>
              </Link>
                {elementFound ? (
                  <button
                    className="bg-black text-white m-2 p-1 rounded w-2/3 "
                    onClick={() => handleRemoveItem(props.item.id)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="bg-black text-white m-2 p-1 rounded w-2/3 "
                    onClick={() => handleAddItem(props.item.id)}
                  >
                    Add
                  </button>
                )}
              
            </div>
          );
      
     
  }

  export default ItemCard;