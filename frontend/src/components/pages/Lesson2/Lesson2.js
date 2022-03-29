import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';

const Lesson2 = () => {
    return (
        <section className="Lesson2">
            <Navbar />
            <h1>This is Lesson 2</h1>
            <Link to='/quiz2'>Go to Quiz 2</Link>
        </section>
    )
}

export default Lesson2;