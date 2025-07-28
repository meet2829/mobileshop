import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Blog from "./Blog"
import ContectUs from "./ContectUs"
import Offers from "./Offers"
import Product from "./Product"
import Reviews from "./Reviews"


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
        <Route path='/Reviews' element={<Reviews />}></Route>
      </Routes>
    </div>
  )
}
export default AllRoutes
