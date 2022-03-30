import './L1Teach.css';
import O from '../../assets/images/O.png'

const L1Teach = () => {
    return (
        <div className='content-wrap'>
            <h1 className='lesson-header'>Lesson 1</h1>
            <p>
                Welcome to your first character lesson in the Fantasy language Dwarvish, 
                aka Cirth, from the World of Middle Earth. The language was built off of a real
                world language known as Runic. So even though there are plenty of characters
                that cross over, it is not the same thing as Runic. 
            </p>
            <p>
                <b>DISCLAIMER:</b> The digital characters come form the Unicode database, which
                does not contain the Cirth alphabet. So these characters are form the Runic library.
                Due to this, there are a few characters that did not exist. So we had to 
                substitute those characters for ones that did exist and were not being used. 
                These characters will be explained to you when necessary.
            </p>
            <p>
                So. Lesson 1. Lets start off simple and leave the complexity for later. Vowels:
                The characters are as follows:
            </p>
            <div className="dwarvish-characters-box">
                <ul className='dwarvish-characters'>
                    <li>A = &#x16A2;</li>
                    <li>E = &#x16BA;</li>
                    <li>I = &#x16C1;</li>
                    <li>O = &#x16A3;</li>
                    <li>U = &#x16DF;</li>
                </ul>
            </div>
            <p>
                O is represented by the character "&#x16A3;". Below is the actual character that
                is used in the language.
            </p>
            <img class= "original" src={O} alt= "Original O"/>
            <p>
                Do your best to review these characters before moving on. This First quiz is a 
                memory game of sorts. Have fun and good luck!
                
            </p>
        </div>
    );
}
export default L1Teach;