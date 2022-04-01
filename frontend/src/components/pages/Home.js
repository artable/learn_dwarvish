import React from 'react';
import Navbar from '../Navbar';

const Home = () => {
  return (
    <section className="Home">
      <Navbar />
      <h1>Learn Cirth</h1>
      <div>Welcome to Learn Cirth!</div>
      <div>This site is split into different lessons covering various sets of the Cirth language, with accompanying quizzes to test your knowledge.</div>
      <div>Click 'Lesson 1' in the navbar above to begin!</div>

    </section>
  );
};

export default Home;