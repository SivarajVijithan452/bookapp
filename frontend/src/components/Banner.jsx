import React from "react";
import image from "../../public/image.png";

function Banner() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold">
                            Get Some Books And <span className="text-green-600">Learn Something New!!!</span>
                        </h1>
                        <p className="py-6 text-xl font-semibold text-justify">
                            We believe in the power of reading to inspire, educate, and entertain. We also host regular author events, book signings, and reading clubs to foster a vibrant literary community. Whether you're a lifelong reader or just beginning your literary journey, we invite you to immerse yourself in the world of books and experience the joy of reading with us.
                        </p>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow  dark:text-black" placeholder="Email" />
                        </label>
                        <button className="btn btn-success">Get Started</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-12 md:mt-0 order-1 md:order-2 flex justify-center items-center">
                    <img src={image} alt="BookLogo" className="w-full h-auto max-w-sm md:max-w-md" />
                </div>
            </div>
        </>
    );
}

export default Banner;
