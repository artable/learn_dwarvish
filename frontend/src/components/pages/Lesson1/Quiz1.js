import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

const Quiz1 = () => {
    return (
        <section className="Quiz1">
            <Navbar />
            <h1>This is Quiz 1</h1>
            <Link to='/lesson2'>Go to Lesson 2</Link>
        </section>
    )
}

export default Quiz1;