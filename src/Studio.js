import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from  "react-router-dom";

const Studio = ()=>{
  const navigate=useNavigate();

  const handleback =()=>{
    navigate(-1);
  }
    return (
      <div className="container m-auto bg-stone-200 w-3/6">

        <h1 className=" p-1 rounded bg-black text-white ">
        <IoMdArrowBack  className="inline mx-3" onClick={()=>handleback()}/>
          Studio
        </h1>
        <div className="flex flex-wrap justify-center m-auto my-2">
          <h1 className="text-sm font-normal ">Guide to influencers' Most Covented Looks</h1>
          <div className="flex justify-between w-full h-30 bg-white my-2">
            <div className="border-4 border-orange-100 w-20 h-20 rounded-full m-3 "></div>
            <div className="border-4 border-orange-100 w-20 h-20 rounded-full m-3 "></div>
            <div className="border-4 border-orange-100 w-20 h-20 rounded-full m-3 "></div>
            <div className="border-4 border-orange-100 w-20 h-20 rounded-full m-3 "></div>
            <div className="border-4 border-orange-100  w-20 h-20 rounded-full m-3 "></div>
          </div>
          <h1 className="text-sm font-normal">Follow Our Top Influencers</h1>
          <div className="flex justify-between w-full h-60 bg-white my-2 p-3">
            <div className=" w-1/2 m-2 bg-slate-200"></div>
            <div className=" w-1/2 m-2 bg-slate-200"></div>
          </div>
        </div>
      </div>
    );
}

export default  Studio;