// import React, { useState } from 'react';

// const QuestionOne = () => {

//     const [enteredQuestionOne, setEnteredQuestionOne] = useState('');

//     const questionOneHandler = (event) => {
//         setEnteredQuestionOne(event.target.value);
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();

//         const questionOneData = {
//             questionOne: enteredQuestionOne,
//         };
//     };

//     return <div onSubmit={submitHandler}>
//         <form>
//             <div>
//                 <h1>Question 1</h1>
//                 <label>Question</label>
//                 <input type="text" value={enteredQuestionOne} onChange={questionOneHandler}></input>
//             </div>
//             <div>
//                 <button type="submit">Check</button>
//             </div>
//         </form>
//     </div>
// };

// export default QuestionOne