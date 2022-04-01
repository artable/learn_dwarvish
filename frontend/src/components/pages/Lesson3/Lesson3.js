import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import L3Teach from '../../Teach/L3Teach';

const Lesson3 = () => {
    return (
        <section className="Lesson3">
            <Navbar />
            <L3Teach />
            <div className='link-box'>
                <Link className='link-quiz2' to='/quiz3'>Go to Quiz 3</Link>
            </div>
        </section>
    )
}

export default Lesson3;