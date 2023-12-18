
const BagElement = ()=>{

    const dummyData = {
        id: "001",
        image: "images/1.jpg",
        company: "Carlton London",
        item_name: "Rhodium-Plated CZ Floral Studs",
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: "10 Oct 2023",
        rating: { "stars": 4.5, "count": 1400 }
      }

    const BagItem = (props)=>{ 

        return (
            <div className="flex bg-slate-400 h-20">
                <div className="w-1/2">
                <p>{props.data.image}</p>
                </div>
                <div className="w-1/2">
                <p>{props.data.item_name}</p>
                </div>
                <div className="w-1/2 text-right">
                    <button>X</button>
                </div>
            </div>
        )
    }

    const BagSummary = (props)=>{
        const noOfItem = 2;
        return(
            <div className="m-2">
                <p>Price Details({noOfItem}Items)</p>
                <hr/>
                <p className="flex justify-between"><span>Total MRP</span><span className="">Amount</span></p>
                <p className="flex justify-between"><span>Discount on MRP</span><span>Amount</span></p>
                <p className="flex justify-between"><span>Convenience Fee</span><apan>Ampunt</apan></p>
                <hr/>
                <p className="flex justify-between font-bold">Total Amount Payable :<span className=""> RM 897.00</span></p>
                <button className="m-2 p-1 rounded bg-black text-white">Place Order</button>
            </div>
        )
    }

    return (
      <div className="  bg-stone-400 w-5/6 h-2/3 m-auto p-2">
        <h1>Bag Elements</h1>
        <hr />
        <div className="flex  m-3">
          <div className=" bg-stone-200 w-2/3">
            <h1>BagItems</h1>
            <hr />
            <BagItem data={dummyData}></BagItem>
            <BagItem data={dummyData}></BagItem>
            <BagItem data={dummyData}></BagItem>
          </div>
          <div className="w-1/3 bg-stone-300">
            <h1>BagSummary</h1>
            <BagSummary></BagSummary>
            <hr />
          </div>
        </div>
      </div>
    );
}
export default BagElement;