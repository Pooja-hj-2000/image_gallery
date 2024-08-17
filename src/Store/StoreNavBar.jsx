import React from 'react'
import { NavLink } from 'react-router-dom'
import '../StoreStyle/StoreNavBar.css'

const StoreNavBar = () => {
  return (
    <div className='snav'>
      <ul type='none' className='ul'>
        <li><NavLink to='/' id="li">Home</NavLink></li>
        <li><NavLink to='/products'id="li">Products</NavLink></li>
        <li><NavLink to='/cartitems' id="li">Cart Items</NavLink></li>
      
      </ul>
    </div>
  )
}

export default StoreNavBar
