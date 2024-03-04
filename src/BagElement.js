import { useSelector} from 'react-redux';
import { removeItem } from './homePageSlice';
import { useDispatch } from 'react-redux';
import { ImBin } from "react-icons/im";

const BagElement = ()=>{

    
      let dispatch = useDispatch();

      const cart  = useSelector(store =>store.cart.items );
      const list  = useSelector(store =>store.itemList.items );
      // console.log(list);
      // console.log(store);
      
      const itemInBag = list.filter(item =>{
        let itemIndex =  cart.indexOf(item.id);
        if(itemIndex>=0) return true;
      })

      // console.log(itemInBag);

      const handleremoveItem =(props)=>{
        dispatch(removeItem(props))
      }
     

      
      
      const BagItem = (props)=>{ 
        return (
            <div className="flex bg-slate-100 m-2 p-1 rounded ">
                <div className="w-1/2 p-1">
                  <img src={props.data?.image}/>
                </div>
                <div className="w-1/2 p-1">
                <p>{props.data?.item_name}</p>
                </div>
                <div className="w-1/2 text-right p-2 text-lg text-red-400 ">
                    <button onClick={()=>{handleremoveItem(props.data.id)}}><ImBin className='hover:text-red-500' /></button>
                </div>
            </div>
        )
    }

    const BagSummary = (props)=>{
        // const noOfItem = 2;
        let totalOriginalPrice = 0;
        let totalmrp = 0;
        let convenienceFee = 99;
        itemInBag.map((item)=> {
          // console.log(item.current_price)
          totalOriginalPrice += item.original_price;
          totalmrp += item.current_price;
        })
        totalmrp +=convenienceFee;
        // console.log(totalmrp);
        // console.log(itemInBag);
        return(
            <div className="m-2">
                <p>Price Details({cart.length} Items)</p>
                <hr/>
                <p className="flex justify-between"><span>Total MRP</span><span className="">{totalOriginalPrice}</span></p>
                <p className="flex justify-between"><span>Discount on MRP </span><span>-{totalOriginalPrice-totalmrp}</span></p>
                <p className="flex justify-between"><span>Convenience Fee</span><span>+{convenienceFee}</span></p>
                <hr/>
                <p className="flex justify-between font-bold">Total Amount Payable :<span className=""> {totalmrp}</span></p>
                <button className="m-2 p-1 rounded bg-black text-white hover:bg-gray-700">Place Order</button>
            </div>
        )
    }

    return (
      <div className="  bg-stone-300 md:w-5/6 max-md:m-2  m-auto rounded">
        <h1 className="text-xl md:font-bold bg-black text-white rounded p-1">
          Bag Elements
        </h1>

        {itemInBag.length == 0 ? (
          <p className="text-center font-light italic m-2">No Item in bag.</p>
        ) : (
          <div className="flex flex-wrap m-3">
            <div className=" bg-stone-200 rounded w-2/3  max-md:w-full">
              <h1 className="text-lg md:font-bold bg-black text-white p-1 m-1 rounded">
                Bag Items
              </h1>
              <hr />

              {itemInBag.map((item) => {
                return <BagItem data={item} key={item.id}></BagItem>;
              })}
            </div>
            <div className="w-1/3 max-md:w-full bg-stone-300">
              <h1 className="text-lg md:font-bold bg-black text-white p-1 m-1 rounded">
                BagSummary
              </h1>

              <BagSummary></BagSummary>
              <hr />
            </div>
          </div>
        )}
      </div>
    );
}
export default BagElement;