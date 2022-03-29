import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

const Quiz2 = () => {
    return (
        <section className="Quiz2">
            <Navbar />
            <h1>This is Quiz 2</h1>
            <Link to='/lesson3'>Go to Lesson 3</Link>
        </section>
    )
}

export default Quiz2;