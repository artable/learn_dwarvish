import React, {Component} from 'react';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import './QuizMain.css';

export default class Quiz extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Which one is the letter A?',
            2: 'Which one is the letter B?',
            3: 'Which one is the letter C?',
            4: 'Which one is the letter D?',
            5: 'Which one is the letter E?',
            6: 'Which one is the letter F?',
        },
        answers: {
            1: {
                1: 'A',
                2: 'T',
                3: 'F'
            },
            2: {
                1: 'D',
                2: 'P',
                3: 'B'
            },
            3: {
                1: 'D',
                2: 'C',
                3: 'Y'
            },
            4: {
                1: 'D',
                2: 'W',
                3: 'A'
            },
            5: {
                1: 'K',
                2: 'E',
                3: 'O'
            },
            6: {
                1: 'E',
                2: 'F',
                3: 'P'
            },
        },
        correctAnswers: {
            1: '1',
            2: '3',
            3: '2',
            4: '1',
            5: '2',
            6: '2',
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    // nextStep = (step) => {
    //     this.setState({
    //         step: step + 1,
    //         correctAnswer: 0,
    //         clickedAnswer: 0
    //     });
    // }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}