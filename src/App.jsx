import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './Component/Allroutes'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

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
