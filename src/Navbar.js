import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <div className=" flex justify-between p-4 bg-stone-200">
            <div>
                <Link to={'/'}>
                Logo
                Title
                </Link>
            </div>
            <div className="flex justify-between">
                <ul className="flex flex-wrap">
                    <li className="m-2 p-1">MEN</li>
                    <li className="m-2 p-1">WOMEN</li>
                    <li className="m-2 p-1">KIDS</li>
                    <li className="m-2 p-1">HOME & LIVING</li>
                    <li className="m-2 p-1">BEAUTY</li>
                    <li className="m-2 p-1">STUDIO</li>
                </ul>
                <input className="m-2 p-1 rounded-md w-96" placeholder="Search Here...."/>
                <ul className="flex">
                    <li className="m-2 p-1">Profile</li>
                    <li className="m-2 p-1">Wishlist</li>
                    <li className="m-2 p-1"><Link to={'/bag'}>Bag</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;