import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { AiOutlineShopping } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const NavBar = () => {

    const {user , logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }


    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>Home</a></li></NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>About</a></li></NavLink>
        <NavLink to='/myOrders' className={({ isActive }) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>My Orders</a></li></NavLink>
       {
        user ? 
        <button onClick={handleLogOut} className="btn text-xl font-bold ">Log Out</button>
        :
        <NavLink to='/login' className={({ isActive }) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>Login</a></li></NavLink>
       }
    </>

    return (
        <div className="navbar bg-base-100 py-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={logo} className="lg:w-24 w-16" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end md:space-x-6">
                <div className="flex mr-2 md:gap-4 items-center">
                    <AiOutlineShopping className="text-2xl mr-3"></AiOutlineShopping>
                    <BsSearch className="text-xl"></BsSearch>
                </div>
                <button className="btn btn-outline text-[#FF3811] text-lg font-semibold px-6">Appointment</button>
            </div>
        </div>
    );
};

export default NavBar;