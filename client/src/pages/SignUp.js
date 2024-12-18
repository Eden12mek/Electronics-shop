import React, { useState } from 'react'
import signinIcon from '../assest/signIn.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
        // profilePic: "",
    });
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

        // if(data.password === data.confirmPassword){

        //   const dataResponse = await fetch(SummaryApi.signUP.url,{
        //       method : SummaryApi.signUP.method,
        //       headers : {
        //           "content-type" : "application/json"
        //       },
        //       body : JSON.stringify(data)
        //     })

        //     const dataApi = await dataResponse.json()

        //     if(dataApi.success){
        //       toast.success(dataApi.message)
        //       navigate("/login")
        //     }

        //     if(dataApi.error){
        //       toast.error(dataApi.message)
        //     }

        // }else{
        //   toast.error("Please check password and confirm password")
        // }

    }
    return (
        <section id='signup' className=' flex items-center justify-center bg-gray-100'>
            <div className='container mx-auto p-4'>
                <div className='bg-white rounded-lg shadow-md p-6 w-full max-w-md mx-auto mt-2 mb-0'>
                    <div className='w-60 h-50 flex items-center justify-center mx-auto'>
                        <img src={signinIcon} alt='login icons' />
                    </div>

                    <form className='flex flex-col gap-4 ' onSubmit={handleSubmit}>
                        <div className='grid'>
                            <label className='mb-1 font-semibold'>Name : </label>
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <input
                                    type='text'
                                    placeholder='enter your name'
                                    name='name'
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />
                            </div>
                            <label className='mb-1 font-semibold'>Email:</label>
                            <div className='bg-gray-100 p-2 rounded-md'>
                                <input
                                    type='email'
                                    placeholder='Enter email'
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
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
                                    required
                                    className='w-full h-full outline-none bg-transparent'
                                />
                                <div
                                    className='cursor-pointer text-xl text-gray-600'
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            
                        </div>
                        <div>
                        <label className='mb-1 font-semibold'>Confirm Password : </label>
                            <div className='bg-gray-100 p-2 flex rounded-md'>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder='Enter confirm password'
                                    value={data.confirmPassword}
                                    name='confirmPassword'
                                    onChange={handleOnChange}
                                    required
                                    className='w-full h-full outline-none bg-transparent' />

                                <div className='cursor-pointer text-xl' onClick={() => setShowConfirmPassword((preve) => !preve)}>
                                    <span>
                                        {
                                            showConfirmPassword ? (
                                                <FaEyeSlash />
                                            )
                                                :
                                                (
                                                    <FaEye />
                                                )
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-1 '>Sign Up</button>

                    </form>

                    <p className='my-5'>
                        Already have account?{" "}
                        <Link to={"/login"} className='text-blue-600 hover:underline'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SignUp