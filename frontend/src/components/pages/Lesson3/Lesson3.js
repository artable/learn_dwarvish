import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import L3Teach from '../../Teach/L3Teach';

const Lesson3 = () => {
    return (
        <section className="Lesson3">
            <Navbar />
            <L3Teach />
            <Link to='/quiz3'>Go to Quiz 3</Link>
        </section>
    )
}

export default Lesson3;