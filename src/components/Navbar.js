import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Buyit.png';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar border-bottom border-body">
        <NavLink to="/"><img src={logo} alt="Logo" className="navbar-logo" />  </NavLink>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <NavLink className="navlinks" to="/">Home</NavLink>
          <NavLink className="navlinks" to="/products">Products</NavLink>
          <NavLink className="navlinks" to="/orders">Orders</NavLink>
          <NavLink className="navlinks" to="/contact">Contact</NavLink>
          <NavLink className="navlinks" to="/profile">Profile</NavLink>
          <NavLink className="navlinks" to="/profile">
            <i className="fa-solid fa-cart-shopping"></i>-{totalItems}
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
