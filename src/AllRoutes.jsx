import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Component/Home"
import About from "./Component/About"
import Blog from "./Component/Blog"
import ContectUs from "./Component/ContectUs"
import Offers from "./Component/Offers"
import Product from "./Component/Product"



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/ContectUs' element={<ContectUs />}></Route>
        <Route path='/Offers' element={<Offers />}></Route>
        <Route path='/Product' element={<Product />}></Route>
        
      </Routes>
    </div>
  )
}
export default AllRoutes
