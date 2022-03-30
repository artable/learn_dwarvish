import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
import L2Teach from '../../Teach/L2Teach';
import './Lesson2.css'

const Lesson2 = () => {
    return (
        <section className="Lesson2">
            <Navbar />
            <L2Teach />
            <div className='link-box'>
                <Link className='link-quiz2'  to='/quiz2'>Go to Quiz 2</Link>
            </div>
        </section>
    )
}

export default Lesson2;