import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar'; // Adjust the path as needed
import Footer from './Footer'; // Adjust the path as needed

function Contacts() {
    // Initialize react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Define onSubmit function
    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here, e.g., send data to an API
    };

    return (
        <>
            <Navbar />
            <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 dark:bg-gray-900 dark:text-gray-200 flex flex-col">
                <br/>
                <main className="flex-grow flex items-center justify-center">
                    <div className="max-w-md w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>

                        <p className="mb-6 text-gray-700 dark:text-gray-400">
                            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, 
                            please fill out the form below and we’ll get back to you as soon as possible.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className='space-y-2'>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    placeholder='Enter Your Name'
                                    className='w-full px-3 border rounded-md outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200'
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>

                            <div className='space-y-2'>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder='Enter Your Email'
                                    className='w-full px-3 border rounded-md outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200'
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>

                            <div className='space-y-2'>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400">Message</label>
                                <textarea
                                    id="message"
                                    placeholder='Enter Your Message'
                                    className='w-full px-3 border rounded-md outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200'
                                    rows="4"
                                    {...register("message", { required: "Message is required" })}
                                />
                                {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                            </div>

                            <div className='mt-4'>
                                <button
                                    type="submit"
                                    className='bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 duration-200 w-full dark:bg-green-700 dark:hover:bg-green-800'
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Contacts;
