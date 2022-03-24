import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <section className='navbar'>
      <body>
        <h1 className='header'>Navigation</h1>

        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about-us'>About us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </body>



      {/* <section>
        <Link to='/'>Home</Link>
      </section>

      <section>
        <Link to='/about-us'>About</Link>
      </section>

      <section>
        <Link to='/contact'>Contact</Link>
      </section> */}
    </section>
  );
}

export default Navbar;