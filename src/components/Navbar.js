import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import headphones from '../img/phones.png'
import '../styles.css'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav className="nav">
      {(toggleMenu || screenWidth > 500) && (
        <>
          <ul className="list">
            <li className="item brand">
              <NavLink to="/about"><img src={headphones} alt="headphones" width="40" height="40" /></NavLink>
            </li>
            <li className="item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="item">
              <NavLink to="/releases">Releases</NavLink>
            </li>
            <li className="item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </>
      )}
      <button onClick={toggleNav} className="btn">BTN</button>
    </nav>
  )
}

export default Navbar
