import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionHandler from '../../../QuestionHandler';
import Navbar from '../../Navbar';
import './Quiz1.css';

class Quiz1 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="Quiz1">
                <Navbar />
                <h1 className='header-quiz'>Quiz 1</h1>
                <QuestionHandler api={"api/all"}/>
                <Link to='/lesson2'>Go to Lesson 2</Link>
            </section>
        )
    }
}
export default Quiz1;