import React from 'react';

function Cards({ item }) {
    return (
        <div className='card bg-base-200 dark:bg-slate-800 dark:border shadow-xl max-w-xs w-full hover:scale-105 duration-200'>
            <figure>
                <img
                    src={item.image}
                    alt={item.title || "Image"}
                    className="w-full h-auto object-cover"
                />
            </figure>
            <div className="card-body p-4">
                <h2 className="card-title text-lg md:text-xl font-semibold dark:text-white">
                    {item.title}
                    <div className="badge badge-success text-sm dark:bg-green-600 dark:text-white">{item.category}</div>
                </h2>
                <p className='text-justify text-sm md:text-base dark:text-gray-200'>
                    {item.description}
                </p>
                <div className="card-actions mt-4 flex flex-col md:flex-row justify-between">
                    <div className="badge badge-outline hover:bg-green-500 hover:text-white px-2 py-1 duration-300 cursor-pointer rounded-full border-black mb-2 md:mb-0 dark:border-gray-700 dark:hover:bg-green-600 dark:text-gray-200">
                        Buy Now
                    </div>
                    <div className="badge badge-outline text-sm md:text-base dark:text-gray-200">
                        $ {item.price}
                    </div>
                </div>
            </div>
            <hr className="dark:border-gray-700"/>
        </div>
    );
}

export default Cards;
