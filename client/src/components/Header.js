import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Hena from '../assest/Hena.png';
import { GrSearch } from 'react-icons/gr';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import EndPoint from '../common';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/userSlice';
import Context from '../context'
import ROLE from '../common/role';



const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search, setSearch] = useState(searchQuery)

  const handleLogout = async () => {
    const fetchData = await fetch(EndPoint.logout_user.url, {
      method: EndPoint.logout_user.method,
      credentials: 'include'
    })

    const data = await fetchData.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if (data.error) {
      toast.error(data.message)
    }

  }

  const handleSearch = (e) => {
    const { value } = e.target
    setSearch(value)

    if (value) {
      navigate(`/search?q=${value}`)
    } else {
      navigate("/search")
    }
  }
  return (
    <header className='h-16 shadow-md fixed w-full z-40' style={{ backgroundColor: '#FFFCFA' }}>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        {/* Left section with the logo and navigation links */}
        <div className=''>
          <Link to={"/"}>
            <img src={Hena} alt="Hena Logo" width="50" height="30" className="bg-opacity-100" />
          </Link>
          {/* <nav className='flex space-x-6'>
            <Link to={"/home"} className='text-lg text-gray-700 hover:text-[#7709FE]'>Home</Link>
            <Link to={"/about-us"} className='text-lg text-gray-700 hover:text-[#7709FE]'>About Us</Link>
            <Link to={"/contact-us"} className='text-lg text-gray-700 hover:text-[#7709FE]'>Contact Us</Link>
          </nav> */}
        </div>

        {/* Search input section */}
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none' onChange={handleSearch} value={search} />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>


        <div className='flex items-center gap-7'>

          <div className='relative flex justify-center'>

            {
              user?._id && (
                <div className='text-3xl cursor-pointer relative flex justify-center' onClick={() => setMenuDisplay(preve => !preve)}>
                  {
                    user?.profilePic ? (
                      <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                    ) : (
                      <FaRegCircleUser />
                    )
                  }
                </div>
              )
            }


            {
              menuDisplay && (
                <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                  <nav>
                    {
                      user?.role === ROLE.ADMIN && (
                        <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={() => setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                      )
                    }

                  </nav>
                </div>
              )
            }

          </div>

          {
            user?._id && (
              <Link to={"/cart"} className='text-2xl relative'>
                <span><FaShoppingCart /></span>

                <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                  <p className='text-sm'>{context?.cartProductCount}</p>
                </div>
              </Link>
            )
          }



          <div>
            {
              user?._id ? (
                <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
              )
                : (
                  <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
                )
            }

          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;
