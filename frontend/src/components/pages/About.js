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
      <h1>This is the about page</h1>
    </section>
  );
};

export default About;