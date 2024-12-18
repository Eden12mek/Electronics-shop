import React from 'react';
import { Link } from 'react-router-dom';
import Hena from '../assest/Hena.png';
import { GrSearch } from 'react-icons/gr';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <header className='h-20 shadow-md fixed w-full z-40' style={{ backgroundColor: '#FFFCFA' }}>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                {/* Left section with the logo and navigation links */}
                <div className='flex items-center space-x-10'>
                    <Link to={"/"}>
                        <img src={Hena} alt="Hena Logo" width="70" height="50" className="bg-opacity-100" />
                    </Link>
                    <nav className='flex space-x-6'>
                        <Link to={"/home"} className='text-lg text-gray-700 hover:text-[#7709FE]'>Home</Link>
                        <Link to={"/about-us"} className='text-lg text-gray-700 hover:text-[#7709FE]'>About Us</Link>
                        <Link to={"/contact-us"} className='text-lg text-gray-700 hover:text-[#7709FE]'>Contact Us</Link>
                    </nav>
                </div>

                {/* Search input section */}
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                    <input type='text' placeholder='Search product here...' className='w-full outline-none' />
                    <div className='text-lg min-w-[50px] h-8  flex items-center justify-center rounded-r-full text-white' style={{ backgroundColor: "#123AAE" }}>
                        <GrSearch />
                    </div>
                </div>

                <div className='flex items-center gap-7'>
                    <div className='text-3xl cursor-pointer relative flex justify-center'>
                        <FaRegCircleUser />
                    </div>
                    <div className='text-2xl'>
                        <span className='text-[#123AAE]'><FaShoppingCart /></span>
                        <div className='bg-[#7709FE] text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>
                    <div>
                        <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-[#123AAE] hover:bg-[#0f3194]'>Login</Link>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;
