import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StoreLogin from './StoreLogin'
import Products from './Products'
import Home from './Home'
import StoreNavBar from './StoreNavBar'
import View from './View'
import Cartitems from './Cartitems'
import ViewProduct from './ViewProduct'


const StoreAppPath = () => {
  return (
    <div>
      <BrowserRouter>
      
      
        <StoreNavBar/>
        <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<ViewProduct/>} path='/viewproduct/:id'></Route>
        <Route element={<Products/>} path='/products'></Route>
        <Route element={<View/>} path='/view/:id'></Route>
        <Route element={<Cartitems/>} path='/cartitems'></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default StoreAppPath
