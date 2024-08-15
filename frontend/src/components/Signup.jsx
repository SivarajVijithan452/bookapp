import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import axios from 'axios';
import toast from 'react-hot-toast'; // Import toast from react-hot-toast
import Login from './Login'; // Import the Login component

function Signup() {
    const navigate = useNavigate();
    // Initialize react-hook-form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Define onSubmit function
    const onSubmit = async (data) => {
        const userInfo = {
            username: data.username,
            email: data.email,
            password: data.password // Corrected typo
        };
        try {
            const response = await axios.post("http://localhost:4001/api/user/signup", userInfo);
            console.log(response.data);

            if (response.data) {
                // Save user data to localStorage
                localStorage.setItem('user', JSON.stringify(response.data.user)); // Assuming response.data.user contains user info

                toast.success("SignUp Successful");
                // Reset form fields after successful signup
                reset();
                navigate('/'); // Redirect to home page
            }
        } catch (error) {
            if (error.response) {
                // Request made and server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                toast.error("SignUp Error: " + (error.response.data.message || "An error occurred"));
            } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
                toast.error("SignUp Error: No response from server");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                toast.error("SignUp Error: " + error.message);
            }
        }
    };

    const openModal = () => {
        const modal = document.getElementById("my_modal_3");
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
                <div className="relative p-5">
                    <div className='font-semibold'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg mb-4">Create Your Account!</h3>
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                            <div className='mt-4 space-y-2'>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder='Enter Your Username'
                                    className='w-full px-3 border rounded-md outline-none'
                                    {...register("username", { required: "Username is required" })}
                                />
                                {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='Enter Your Email'
                                    className='w-full px-3 border rounded-md outline-none'
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>

                            <div className='mt-4 space-y-2'>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder='Enter Your Password'
                                    className='w-full px-3 border rounded-md outline-none'
                                    {...register("password", { required: "Password is required" })}
                                />
                                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>

                            <div className='mt-4'>
                                <button
                                    type="submit"
                                    className='bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 duration-200 w-full'
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className='mt-4 text-center'>
                                <p className='font-semibold'>
                                    Already have an account?{' '}
                                    <button className='underline text-blue-500 cursor-pointer' onClick={openModal}>
                                        Log In
                                    </button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
