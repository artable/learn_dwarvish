import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionHandler from '../../../QuestionHandler';
import Navbar from '../../Navbar';

class Quiz2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="Quiz2">
                <Navbar />
                <h1 className='header-quiz'>Quiz 2</h1>
                <QuestionHandler />
                <div className='link-box'>
                    <Link className='link-quiz2' to='/lesson3'>Go to Lesson 3</Link>
                </div>
            </section>
        )   
    }
}
export default Quiz2;