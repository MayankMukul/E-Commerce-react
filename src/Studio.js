import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from  "react-router-dom";

const Studio = ()=>{
  const navigate=useNavigate();

  const handleback =()=>{
    navigate(-1);
  }
    return (
      <div className="container m-auto bg-stone-50 w-3/6">

        <h1 className=" p-1 rounded bg-black text-white ">
        <IoMdArrowBack  className="inline mx-3" onClick={()=>handleback()}/>
          Studio
        </h1>
        <div className="flex flex-wrap justify-center m-auto my-2">
          <h1 className="text-sm font-normal">Guide to influencers' Most Covented Looks</h1>
        </div>
      </div>
    );
}

export default  Studio;