import React from 'react'
import { assets } from '../Assest/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
        <div>
            {/* active bala lofgic laagana h  */}
            <NavLink to='/add'>
                <img src={assets.add_icon}></img>
                <p>Add items</p>
            </NavLink>
            <NavLink to='/list'>
                <img src={assets.order_icon}></img>
                <p>Lsit items</p>
            </NavLink>
            <NavLink to='/orders'>
                <img src={assets.order_icon}></img>
                <p>Orders</p>
                </NavLink>
        </div>
    </div>
  )
}

export default SideBar