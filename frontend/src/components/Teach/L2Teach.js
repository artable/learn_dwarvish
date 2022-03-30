import J from '../../assets/images/J.png';

const L2Teach = () => {
    return (
        <div className='content-wrap'>
            <h1 className='lesson-header'>Lesson 2</h1>
            <p>
                Lets start getting into the constonants. There will be some letters missing, and there
                is good reason for that. Don't worry about that now, they will be taught in later 
                lessons. So, for now lets get into Lesson 2 Consonants Pt 1.
            </p>
            <p>
                <b>DISCLAIMER:</b> The digital characters come form the Unicode database, which
                does not contain the Cirth alphabet. So these characters are form the Runic library.
                Due to this, there are a few characters that did not exist. So we had to 
                substitute those characters for ones that did exist and were not being used. 
                These characters will be explained to you when necessary.
            </p>
            <p>
                Lesson 2, as previously stated, will cover approximately the first half of the 
                consonants in the alphabet.
            </p>
            <div className="dwarvish-characters-box">
                <ul className='dwarvish-characters'>
                    <li>B = &#x16B1;</li>
                    <li>D = &#x16A8;</li>
                    <li>F = &#x16E9;</li>
                    <li>G = &#x16A0;</li>
                    <li>J = &#x16AD;</li>
                    <li>K = &#x16B4;</li>
                    <li>L = &#x16C5;</li>
                    <li>M = &#x16D2;</li>
                    <li>N = &#x16C9;</li>
                </ul>
            </div>
            <p>
                j is represented by the character "&#x16AD;". Below is the actual character that
                is used in the language.

            </p>
        <img class= "original" src ={J} alt= "Original J"/>
        </div>
    );
}
export default L2Teach;