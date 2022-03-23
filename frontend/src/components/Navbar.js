import React, { useState } from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <section className='navbar'>
      <section>
        <Link to='/'>Home</Link>
      </section>

      <section>
        <Link to='/about-us'>About</Link>
      </section>

      <section>
        <Link to='/contact'>Contact</Link>
      </section>
    </section>
  );
}

export default Navbar;