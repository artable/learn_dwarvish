import './Question.css';

const Question = (props) => {
    return (
        <div className='question'>
        <h1>{props.question}</h1>
        </div>
    );
}

export default Question;