import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IoBagHandleSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { HiViewList } from "react-icons/hi";


const Navbar = ()=>{
    let items = useSelector(store=>store.cart.items)
    // console.log(items.length);

    const [searchText, setsearchText] = useState('');
    // console.log(searchText);

    const [showList, setshowList]=useState(false);

    const toggleShowList=()=>{
        setshowList(!showList);
    }

    const navigate = useNavigate();

    return (
      <div>
        <div className=" flex justify-between p-4 bg-stone-200">
          <div className="self-center">
            <span className=" m-1 p-1 text-sm md:hidden">
              <HiViewList
                className="inline-block"
                onClick={() => toggleShowList()}
              />
            </span>
            <Link to={"/"}>Logo</Link>
          </div>
          <div className="flex justify-between">
            <ul className="flex flex-wrap max-md:hidden">
              <li className="m-2 p-1">
                <Link to={"/"}>HOME</Link>
              </li>
              <li className="m-2 p-1">
                <Link to={"/men"}>MEN</Link>
              </li>
              <li className="m-2 p-1">
                <Link to={"/women"}>WOMEN</Link>
              </li>
              <li className="m-2 p-1">
                <Link to={"/kids"}>KIDS</Link>
              </li>
              <li className="m-2 p-1">
                <Link to={"/beauty"}>BEAUTY</Link>
              </li>
              <li className="m-2 p-1">
                <Link to={"/studio"}>STUDIO</Link>
              </li>
            </ul>

            <button
              className=" p-2 mt-1 bg-white text-black h-10 rounded-s-lg max-lg:hidden"
              // onClick={()=>{
              //     // window.location='/search/'+ searchText;
              //     console.log(searchText);
              // }}
            >
              <Link to={`/search/${searchText}`}>
                <IoSearch />
              </Link>
            </button>
            <input
              className="p-1 mr-2 mt-1 rounded-e-lg w-72 h-10 focus:outline-none max-lg:hidden"
              placeholder="Search By Name..."
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  console.log("enter");
                  navigate(`/search/${searchText}`);
                }
              }}
              onChange={(text) => {
                setsearchText(text.target.value);
                // console.log(text.key)
              }}
            />
            <ul className="flex">
              <li className="m-2 max-sm:m-1 p-1 text-sm lg:hidden">
                <IoSearch className="" />
              </li>
              <li className="m-2 max-sm:m-1 p-1 text-sm">
                <Link to={"/profile"}>
                  <IoPerson className="m-auto" />
                  <span className="max-lg:hidden">Profile</span>
                </Link>
              </li>
              <li className="m-2 max-sm:m-1 p-1 text-sm">
                <Link to={"/wishlist"}>
                  <GoHeartFill className="m-auto" />
                  <span className="max-lg:hidden">Wishlist</span>
                </Link>
              </li>
              <li className="m-2 max-sm:m-1 p-1 text-sm">
                <Link to={"/bag"}>
                  <IoBagHandleSharp className="m-auto" />
                  {items.length != 0 ? (
                    <span className="bg-red-500 absolute inline-flex items-center justify-center w-4 h-4  top-5 right-5 p-0.5 text-xs font-thin text-white  rounded-full">
                      {items.length}
                    </span>
                  ) : (
                    <></>
                  )}

                  <span className="max-lg:hidden">Bag</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {showList ? (
          <div className="list flex  bg-stone-200  md:hidden ">
            <ul className="block  w-11/12">
              <li className="m-2 ml-6 p-1">
                <Link to={"/"} onClick={() => {
                toggleShowList();
              }
            }
              >HOME</Link>
              </li>
              <li className="m-2 ml-6 p-1">
                <Link to={"/men"} onClick={() => {
                toggleShowList();
              }
            }>MEN</Link>
              </li>
              <li className="m-2 ml-6 p-1">
                <Link to={"/women"} onClick={() => {
                toggleShowList();
              }
            }>WOMEN</Link>
              </li>
              <li className="m-2 ml-6 p-1">
                <Link to={"/kids"} onClick={() => {
                toggleShowList();
              }
            }>KIDS</Link>
              </li>
              <li className="m-2 ml-6 p-1">
                <Link to={"/beauty"} onClick={() => {
                toggleShowList();
              }
            }>BEAUTY</Link>
              </li>
              <li className="m-2 ml-6 p-1">
                <Link to={"/studio"} onClick={() => {
                toggleShowList();
              }
            }>STUDIO</Link>
              </li>
            </ul>
            <button
              className="w-1/12 h-10"
              onClick={() => {
                toggleShowList();
              }}
            >
              X
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
}

export default Navbar;