import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionHandler from '../../../QuestionHandler';
import Navbar from '../../Navbar';

class Quiz3 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="Quiz3">
                <Navbar />
                <h1 className='header-quiz'>Quiz 3</h1>
                <QuestionHandler />
                <div className='link-box'>
                    <Link className='link-quiz3' to='/'>Go Home</Link>
                </div>
            </section>
        )   
    }
}
export default Quiz3;