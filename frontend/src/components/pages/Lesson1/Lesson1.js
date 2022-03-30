import React from 'react';
import Navbar from '../../Navbar';
import { Link } from "react-router-dom";
import L1Teach from '../../Teach/L1Teach';
// frontend\src\components\Teach\L1Teach.js

const Lesson1 = () => {
    return (
        <section className="Lesson1">
            <Navbar />
            <h1>This is Lesson 1</h1>
            <L1Teach />
            <Link to='/quiz1'>Go to Quiz 1</Link>

        </section>
    )
}

export default Lesson1;