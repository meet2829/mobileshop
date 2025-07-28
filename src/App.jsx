import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './AllRoutes'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {


  useEffect(() => {
  AOS.init({
    duration: 2000,
  });
  }, []);

  return (
    <>
    <BrowserRouter>
    <AllRoutes />
    </BrowserRouter>
        
    </>
  )
}

export default App
