import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

//outlet  aa link pagelekk keraan  -- <outlet/> bottom upayogikkuka

function ProductNav() {
  return (
    <>
    <Helmet>
        <title>Product Page</title>
    </Helmet>
        <div className="Product-nav">
            <nav>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" :""} to="all">All</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" :""} to="fashion">Fashion</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" :""} to="electrinics">Electronics</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "active" :""} to="students">Students</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        <Outlet/>
    </>
    
  )
}

export default ProductNav;