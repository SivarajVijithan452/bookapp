import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
       const res = await axios.get("http://localhost:4001/api/books");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 dark:bg-gray-900 dark:text-gray-200 flex flex-col'>
      <div className='mt-28 text-center'>
        <h1 className='text-2xl font-semibold md:text-3xl'>
          We're Delighted To <span className='text-green-600 dark:text-green-400'>Have you Here!!!</span>
        </h1>
        <p className='mt-8 text-justify font-semibold'>
          Explore a diverse range of courses designed to enhance your skills and knowledge. Whether you're looking to advance your career or pursue a new hobby, our offerings cater to all interests and expertise levels. Start learning today and unlock your full potential!
        </p>
      </div>
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {book.map((item) => (
          <div key={item.id} className='flex justify-center dark:bg-gray-800'>
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
