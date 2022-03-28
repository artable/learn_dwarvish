// import React, {Component} from 'react';
// import Question from './Question/Question';
// import Answer from './Answer/Answer';
// import './QuizMain.css';

// export default class Quiz extends Component {

    

//     dwarvish = this.state.charList.map(element => {
//         return element.dwarvish;
//     });

//     english = this.state.charList.map(element => {
//         return element.dwarvish;
//     });

//     // initiating the local state
//     state = {
//         quiestions: {
//             1: `What does this english character translates to ${english[0]}?`,
//             2: `What does this english character translates to ${english[1]}?`,
//             3: `What does this english character translates to ${english[2]}?`,
//             4: `What does this english character translates to ${english[3]}?`,
//             5: `What does this english character translates to ${english[4]}?`,
//             6: `What does this english character translates to ${english[5]}?`,
//         },
//         answers: {
//             1: {
//                 1: `${dwarvish[0]}`,
//                 2: `${dwarvish[1]}`,
//                 3: `${dwarvish[2]}`,
//             },
//             2: {
//                 1: `${dwarvish[3]}`,
//                 2: `${dwarvish[4]}`,
//                 3: `${dwarvish[5]}`
//             },
//             3: {
//                 1: `${dwarvish[6]}`,
//                 2: `${dwarvish[7]}`,
//                 3: `${dwarvish[8]}`
//             },
//             4: {
//                 1: `${dwarvish[9]}`,
//                 2: `${dwarvish[10]}`,
//                 3: `${dwarvish[11]}`
//             },
//             5: {
//                 1: `${dwarvish[12]}`,
//                 2: `${dwarvish[13]}`,
//                 3: `${dwarvish[14]}`
//             },
//             6: {
//                 1: `${dwarvish[15]}`,
//                 2: `${dwarvish[16]}`,
//                 3: `${dwarvish[17]}`
//             },
//         },
//         correctAnswers: {
//             1: '1',
//             2: '3',
//             3: '2',
//             4: '1',
//             5: '2',
//             6: '2',
//         },
//         correctAnswer: 0,
//         clickedAnswer: 0,
//         step: 1,
//         score: 0
//     }

//     // the method that checks the correct answer
//     checkAnswer = answer => {
//         const { correctAnswers, step, score } = this.state;
//         if(answer === correctAnswers[step]){
//             this.setState({
//                 score: score + 1,
//                 correctAnswer: correctAnswers[step],
//                 clickedAnswer: answer
//             });
//         }else{
//             this.setState({
//                 correctAnswer: 0,
//                 clickedAnswer: answer
//             });
//         }
//     }

//     // method to move to the next question
//     nextStep = (step) => {
//         this.setState({
//             step: step + 1,
//             correctAnswer: 0,
//             clickedAnswer: 0
//         });
//     }

//     render(){
//         let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
//         return(
//             <div className="Content">
//                 {step <= Object.keys(quiestions).length ? 
//                     (<>
//                         <Question
//                             question={quiestions[step]}
//                         />
//                         <Answer
//                             answer={answers[step]}
//                             step={step}
//                             checkAnswer={this.checkAnswer}
//                             correctAnswer={correctAnswer}
//                             clickedAnswer={clickedAnswer}
//                         />
//                         <button
//                         className="NextStep"
//                         disabled={
//                             clickedAnswer && Object.keys(quiestions).length >= step
//                             ? false : true
//                         }
//                         onClick={() => this.nextStep(step)}>Next</button>
//                     </>) : (
//                         <div className="finalPage">
//                             <h1>You have completed the quiz!</h1>
//                             <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
//                             <p>Thank you!</p>
//                         </div>
//                     )
//                 }
//             </div>
//         );
//     }
// }