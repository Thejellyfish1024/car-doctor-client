import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'


const NavBar = () => {

    const navLinks = <>
        <NavLink to='/' className={({isActive}) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>Home</a></li></NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>About</a></li></NavLink>
        <NavLink to='/services' className={({isActive}) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>Services</a></li></NavLink>
        <NavLink to='/blog' className={({isActive}) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>Blog</a></li></NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? 'text-red-500 text-xl font-bold underline' : 'text-xl font-bold'}><li><a>Contact</a></li></NavLink>
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
                <img src={logo} className="w-24" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;