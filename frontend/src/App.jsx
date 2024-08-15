import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/Home';
import Coursesfile from './courses/Coursesfile';
import Signup from './components/Signup';
import Contacts from './components/Contacts';
import About from './components/About';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'; // Ensure this path is correct

function App() {
  const [authUser] = useAuth(); // Destructure only the authUser from useAuth

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Correctly use the ternary operator to render the component or navigate */}
        <Route path="/course" element={authUser ? <Coursesfile /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
