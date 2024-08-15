import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // Fetch all books from API
                const response = await axios.get('http://localhost:4001/api/books');
                // Filter books by the "free" category
                const freeBooks = response.data.filter(book => book.category === 'free');
                setBooks(freeBooks);
            } catch (error) {
                console.error('Failed to fetch books:', error);
            }
        };

        fetchBooks();
    }, []); // Empty dependency array to run only once on mount

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <br />
            <hr />
            <br />
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 items-center'>
                <div>
                    <h1 className='font-bold text-xl pb-2'>Free Books Available!!!</h1>
                    <p className='font-semibold'>Checkout our free books and learn something</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {books.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Books;
