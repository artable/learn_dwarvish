import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <section className="Home">
      <h1>This is the homepage</h1>

      <Navbar />
    </section>
  );
};

export default Home;