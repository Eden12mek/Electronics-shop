import React, { useState } from 'react';
import signinIcon from '../assest/signIn.gif';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import EndPoint from '../common';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    
    const navigate = useNavigate()
    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const dataResponse = await fetch(EndPoint.signIn.url,{
            method : EndPoint.signIn.method,
            credentials : 'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate('/')
            // fetchUserDetails()
            // fetchUserAddToCart()
        }

        if(dataApi.error){
            toast.error(dataApi.message)
        }

    }

    return (
        <section id='login' className=' flex items-center justify-center bg-gray-100'>
            <div className='container mx-auto p-4'>
                <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto mt-2 mb-0'>
                    <div className='w-30 h-30 '>
                        <img src={signinIcon} alt='login icons' />
                    </div>
                    <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label className='mb-1 font-semibold'>Email:</label>
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <input
                                    type='email'
                                    placeholder='Enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                />
                            </div>
                        </div>

                        <div>
                            <label className='mb-1 font-semibold'>Password:</label>
                            <div className='bg-gray-100 p-2 flex rounded-md'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter password'
                                    value={data.password}
                                    name='password'
                                    onChange={handleOnChange}
                                    className='w-full h-full outline-none bg-transparent'
                                />
                                <div
                                    className='cursor-pointer text-xl text-gray-600'
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto text-blue-600 hover:underline mt-1'>
                                Forgot password?
                            </Link>
                        </div>
                        <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Login</button>

                    </form>

                    <p className='mt-6 text-center'>
                        Don't have an account?{" "}
                        <Link to={"/sign-up"} className='text-blue-600 hover:underline'>
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
