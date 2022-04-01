import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionHandler from '../../../QuestionHandler';
import Navbar from '../../Navbar';
import './Quiz1.css';

class Quiz1 extends Component {
    constructor(props) {
        super(props);
        this.apiFetch.bind(this);
    }

    async apiFetch()   
     {
        try {
          const res = await fetch("http://localhost:8000/api/vowels");
          const charList = await res.json();
          //TODO this is hecka gross and should be factored into a seperate method
          //even if initialization has to be handled seperate everytime
          return [<QuestionHandler charList={charList}/>];
        } catch (e) {
          console.log(e);
          console.log(this.state);
        }
      }
    
    render() {
        return (
            <section className="Quiz1">
                <Navbar />
                <h1 className='header-quiz'>Quiz 1</h1>
                {this.apiFetch()}
                <div className='link-box'>
                    <Link className='link-quiz1' to='/lesson2'>Go to Lesson 2</Link>
                </div>
            </section>
        )
    }
}
export default Quiz1;