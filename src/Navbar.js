import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { IoBagHandleSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";


const Navbar = ()=>{
    let items = useSelector(store=>store.cart.items)
    // console.log(items.length);

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
                <input className="m-2 p-1 rounded-md w-96" placeholder="Search Here...."/>
                <ul className="flex">
                    <li className="m-auto p-1"><Link to={'/profile'}><IoPerson className="m-auto"/>Profile</Link></li>
                    <li className="m-2 p-1"><Link to={'/wishlist'}><GoHeartFill className="m-auto"/>Wishlist</Link></li>
                    <li className="m-2 p-1"><Link to={'/bag'}><span><IoBagHandleSharp className="m-auto"/>Bag</span>
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