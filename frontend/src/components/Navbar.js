import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <section className='navbar'>
      <section>
        <h1 className='header'>Navigation</h1>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about-us'>About us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </section>
    </section>
  );
}

export default Navbar;