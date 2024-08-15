import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const dialogRef = useRef(null); // Create a ref for the dialog

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    // Function to validate email and password
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        // Example password validation: minimum 6 characters
        return password.length >= 6;
    };

    const onSubmit = async (data) => {
        const { email, password } = data;

        // Validate email and password
        if (!validateEmail(email)) {
            toast.error("Invalid email format");
            return;
        }
        if (!validatePassword(password)) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        const userInfo = { email, password };
        try {
            const response = await axios.post("http://localhost:4001/api/user/login", userInfo);
            console.log(response.data);

            if (response.data) {
                // Save user data to localStorage
                 // Save the entire response data or the specific part you need
            localStorage.setItem('user', JSON.stringify(response.data)); 
            console.log('User data saved:', JSON.parse(localStorage.getItem('user'))); // Confirm what is saved

                toast.success("Logged in Successfully!!");
                reset(); // Reset form fields after successful login
                handleClose(); // Close the modal
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                toast.error("Login Error: " + error.response.data.message || "An error occurred");
            } else if (error.request) {
                console.log(error.request);
                toast.error("Login Error: No response from server");
            } else {
                console.log('Error', error.message);
                toast.error("Login Error: " + error.message);
            }
        }
    };

    const handleClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close(); // Close the dialog
        }
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal" ref={dialogRef}>
                <div className="modal-box relative">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        >
                            ✕
                        </button>

                        <h3 className="font-bold text-lg">Login to Your Account!</h3>

                        <div className='mt-4 space-y-2'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder='Enter Your Email'
                                className='w-full px-3 border rounded-md outline-none'
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>

                        <div className='mt-4 space-y-2'>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder='Enter Your Password'
                                className='w-full px-3 border rounded-md outline-none'
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>

                        <div className='mt-4 flex justify-around'>
                            <button
                                type="submit"
                                className='bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'
                            >
                                Login
                            </button>
                        </div>

                        <div className='mt-4 text-center'>
                            <p className='font-semibold'>
                                Not Registered?{' '}
                                <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
