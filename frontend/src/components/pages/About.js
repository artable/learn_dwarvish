import React from 'react';
import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom';

function About () {

  const location = useLocation()
  const { api } = location.state

  console.log(api)

  return (
    <section className="About">
      <Navbar />
      <h1>About us</h1>
      <div>This web app was developed by a group of five people who love Tolkien and think Cirth is pretty cool.</div>
      <div>We are all aspiring software developers who thought learning how to make web apps was a good idea for some insane reason.</div>
    </section>
  );
};

export default About;