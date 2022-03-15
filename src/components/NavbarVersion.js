import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import { ReactComponent as CloseMenu } from "../img/x.svg";
import { ReactComponent as MenuIcon } from "../img/menu.svg";
import headphones from '../img/phones.png'

const NavbarVersion = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header-nav">
      <div className="logo-nav">
        <div className="logo-container">
          <a href="/">
            <img src={headphones} alt="headphones" width="40" height="40" />
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/releases">RELEASES</NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>

        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
            <MenuIcon className="menu-icon" />
          )}
      </div>
    </div>
  );
};


export default NavbarVersion
