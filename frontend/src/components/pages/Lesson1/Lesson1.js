import React from 'react';
import Navbar from '../../Navbar';
import { Link } from "react-router-dom";
import QuestionHandler from '../../../QuestionHandler';

const Lesson1 = () => {
    return (
        <section className="Lesson1">
            <Navbar />
            <h1>This is Lesson 1</h1>
            <Link to='/quiz1'>Go to Quiz 1</Link>

        </section>
    )
}

export default Lesson1;