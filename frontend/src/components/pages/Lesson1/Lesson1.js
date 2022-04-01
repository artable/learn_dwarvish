import React from 'react';
import Navbar from '../../Navbar';
import { Link } from "react-router-dom";
import L1Teach from '../../Teach/L1Teach';
import './Lesson1.css';

// frontend\src\components\Teach\L1Teach.js

const Lesson1 = () => {
    return (
        <section className="Lesson1">
            <Navbar />
            <L1Teach />
            <div className='link-box'>
                <Link className='link-quiz1' to='/quiz1'>Go to Quiz 1</Link>
            </div>
        </section>
    )
}

export default Lesson1;