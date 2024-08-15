import React from 'react';
import Navbar from './Navbar'; // Adjust the path as needed
import Footer from './Footer'; // Adjust the path as needed

function About() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-gray-200">
                <main className="flex-grow bg-gray-100 py-8 mt-12 dark:bg-gray-800">
                    <div className="max-w-4xl mx-auto px-4">
                        <section className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Welcome to Globel Book Store</h2>
                            <p className="text-gray-700 mb-4 dark:text-gray-400">
                                At Globel Book Store, we are passionate about books and the joy they bring to readers of all ages.
                                Our bookstore offers a curated selection of both classic and contemporary titles, along with a range 
                                of genres to cater to every taste. Whether you are looking for the latest bestsellers, timeless classics, 
                                or hidden gems, our knowledgeable staff is here to help you find your next great read.
                            </p>
                            <p className="text-gray-700 mb-4 dark:text-gray-400">
                                We pride ourselves on creating a welcoming environment where book lovers can explore, discover, and 
                                connect with others who share their passion for reading. Join us for special events, author signings, 
                                and book clubs that foster a love of literature and community.
                            </p>
                            <p className="text-gray-700 mb-4 dark:text-gray-400">
                                Thank you for choosing Globel Book Store. We look forward to seeing you in-store or online, 
                                and we hope you find something that inspires and delights you.
                            </p>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default About;
