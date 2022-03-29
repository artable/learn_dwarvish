import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import QuestionHandler from './QuestionHandler';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <QuestionHandler />
=======
// import './index.css';
// import reportWebVitals from './reportWebVitals';
import "bulma/css/bulma.min.css";
import RouterLinks from "./components/RouterLinks";

ReactDOM.render(
  <React.StrictMode>
    <RouterLinks />
>>>>>>> b8d4780bfc23f3f72ec42ee03818a54251441d6d
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
