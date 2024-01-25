import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


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
                    <li className="m-2 p-1 text-center"><Link to={'/profile'}>Profile</Link></li>
                    <li className="m-2 p-1"><Link to={'/wishlist'}>Wishlist</Link></li>
                    <li className="m-2 p-1"><Link to={'/bag'}><span>Bag</span><span className="bg-red-500 text-white p-1 rounded-full">{items.length}</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;