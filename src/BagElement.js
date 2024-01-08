import { useSelector} from 'react-redux';
import { removeItem } from './homePageSlice';
import { useDispatch } from 'react-redux';

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
            <div className="flex bg-slate-400 h-20">
                <div className="w-1/2">
                <p>{props.data?.image}</p>
                </div>
                <div className="w-1/2">
                <p>{props.data?.item_name}</p>
                </div>
                <div className="w-1/2 text-right">
                    <button onClick={()=>{handleremoveItem(props.data.id)}}>X</button>
                </div>
            </div>
        )
    }

    const BagSummary = (props)=>{
        // const noOfItem = 2;
        let totalOriginalPrice = 0;
        let totalmrp = 0;
        itemInBag.map((item)=> {
          // console.log(item.current_price)
          totalOriginalPrice += item.original_price;
          totalmrp += item.current_price;
        })
        // console.log(totalmrp);
        // console.log(itemInBag);
        return(
            <div className="m-2">
                <p>Price Details({cart.length} Items)</p>
                <hr/>
                <p className="flex justify-between"><span>Total MRP</span><span className="">{totalOriginalPrice}</span></p>
                <p className="flex justify-between"><span>Discount on MRP </span><span>-{totalOriginalPrice-totalmrp}</span></p>
                <p className="flex justify-between"><span>Convenience Fee</span><span>Amount</span></p>
                <hr/>
                <p className="flex justify-between font-bold">Total Amount Payable :<span className=""> {totalmrp}</span></p>
                <button className="m-2 p-1 rounded bg-black text-white">Place Order</button>
            </div>
        )
    }

    return (
      <div className="  bg-stone-400 w-5/6 h-2/3 m-auto p-2">
        <h1 className='text-xl font-bold'>Bag Elements</h1>
        <hr />
        <div className="flex  m-3">
          <div className=" bg-stone-200 w-2/3">
            <h1 className='text-lg font-bold'>BagItems</h1>
            <hr />
            {
              (itemInBag.length==0)?<p className='text-center font-light italic'>No Item in bag.</p>:<></>
            }
            {
              itemInBag.map(item =>{
                return (
                  <BagItem data={item} key={item.id}></BagItem>
                )
              }
              )
            }
          </div>
          <div className="w-1/3 bg-stone-300">
            <h1 className='text-lg font-bold'>BagSummary</h1>
            
            <BagSummary></BagSummary>
            <hr />
          </div>
        </div>
      </div>
    );
}
export default BagElement;