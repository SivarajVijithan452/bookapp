// index.js or index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Import your CSS file here
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider'; // Adjust the path as needed

ReactDOM.render(
  <>
  <BrowserRouter>
    <AuthProvider>
    <div className='dark:bg-slate-900 dark:text-white'>
    <App />
    </div>
    </AuthProvider>
  </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);
