import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IoBagHandleSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";


const Navbar = ()=>{
    let items = useSelector(store=>store.cart.items)
    // console.log(items.length);

    const [searchText, setsearchText] = useState('');
    // console.log(searchText);

    return (
        <div className=" flex justify-between p-4 bg-stone-200">
            <div>
                <Link to={'/'}>
                Logo
                </Link>
            </div>
            <div className="flex justify-between">
                <ul className="flex flex-wrap">
                    <li className="m-2 p-1"><Link to={'/'}>HOME</Link></li>
                    <li className="m-2 p-1"><Link to={'/men'}>MEN</Link></li>
                    <li className="m-2 p-1"><Link to={'/women'}>WOMEN</Link></li>
                    <li className="m-2 p-1"><Link to={'/kids'}>KIDS</Link></li>
                    <li className="m-2 p-1">BEAUTY</li>
                    <li className="m-2 p-1">STUDIO</li>
                </ul>
                <button className=" p-2 mt-1 bg-white text-black h-10 rounded-s-lg"
                // onClick={()=>{
                //     // window.location='/search/'+ searchText;
                //     console.log(searchText);
                // }}
                >
                    <Link to={`/search/${searchText}`}><IoSearch/></Link></button>
                <input className="p-1 mr-2 mt-1 rounded-e-lg w-96 h-10 focus:outline-none" placeholder="Search Here...."
                onChange={(text)=>{
                    setsearchText(text.target.value);
                }
                }/>
                <ul className="flex">
                    <li className="m-auto p-1 text-sm"><Link to={'/profile'}><IoPerson className="m-auto"/>Profile</Link></li>
                    <li className="m-2 p-1 text-sm"><Link to={'/wishlist'}><GoHeartFill className="m-auto"/>Wishlist</Link></li>
                    <li className="m-2 p-1 text-sm"><Link to={'/bag'}><span><IoBagHandleSharp className="m-auto"/>Bag</span>
                    {(items.length!=0)?
                    <span className="bg-red-500 text-white p-1 rounded-3xl">{items.length}</span>
                    :<></>}
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;