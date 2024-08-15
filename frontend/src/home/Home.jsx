import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Books from '../components/Books';

function Home() {
  return (
    <>
    <Navbar />
    <Banner />
    <Books />
    <Footer />
    </>
  )
}

export default Home