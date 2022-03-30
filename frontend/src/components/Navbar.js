import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  // const aboutUsApi = 'api/about-us'
  return (
    <section className='navbar'>
      <section>
        <div className='header-box'>
          <h1 className='header'>Learning Dwarvish</h1>
        </div>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about-us' state={{api: 'api/stuff'}}>About us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/lesson1'>Lesson 1</Link></li>
          <li><Link to='/lesson2'>Lesson 2</Link></li>
          <li><Link to='/lesson3'>Lesson 3</Link></li>
        </ul>
      </section>
    </section>
  );
}

export default Navbar;