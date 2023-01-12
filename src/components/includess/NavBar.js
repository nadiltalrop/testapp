import React from 'react'
import { NavLink } from 'react-router-dom';

//navlink use cheyyunnath link select aayi irikkumbol style apply aakum (active time) veroru classilekk assign cheyyum
//link tag = a tag

function NavBar() {
  return (
    <div className='navbar'>
        <h1>Logo</h1>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" :""} to="Home">Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" :""} to="products">Products</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" :""} to="about">About</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active" :""} to="contact">Contact</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar;