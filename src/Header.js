import React, { useContext } from 'react'
import './header.css'
import {NavLink , Outlet} from 'react-router-dom'
import cartIcon from './imgs/cart.png'
import { Context } from './Context'

export default function Header() {
  const context = useContext(Context)
  return (
    <>
    <header>
        <nav>
            <ul>
                <li>
                  <NavLink to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/menu'>
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'/contact-us'}>
                    Contact Us
                  </NavLink>
                </li>
            </ul>
            <NavLink to={'/cart'}>
            <div className="cart-icon">
              <img src={cartIcon} alt="" />
              <p>{context.cartItemsNum}</p>
            </div>
            </NavLink>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}
