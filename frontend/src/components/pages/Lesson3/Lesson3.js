import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

const Lesson3 = () => {
    return (
        <section className="Lesson3">
            <Navbar />
            <h1>This is Lesson 3</h1>
            <Link to='/quiz3'>Go to Quiz 3</Link>
        </section>
    )
}

export default Lesson3;