import React from 'react';
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';

function Coursesfile() {
    return (
        <>
            
            <Navbar />
            <div className='min-h-screen dark:bg-gray-900 dark:text-gray-200'>
                <Course />
            </div>
            <Footer />
        </>
    );
}

export default Coursesfile;
