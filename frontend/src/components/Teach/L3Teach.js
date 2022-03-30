const L3Teach = () => {
    return (
        <div className='content-wrap'>
            <h1 className='lesson-header'>Lesson 3</h1>
            <p>
                Welcome to Lesson 3. We will continue with consonants for this lesson. There will be some letters missing, and there
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
                Lesson 3, as previously stated, will cover approximately the second half of the 
                consonants in the alphabet.
            </p>
            <div className="dwarvish-characters-box">
                <ul className='dwarvish-characters'>
                    <li>P = &#x16B9;</li>
                    <li>R = &#x16CF;</li>
                    <li>S = &#x16B2;</li>
                    <li>T = &#x16DA;</li>
                    <li>V = &#x16D5;</li>
                    <li>W = &#x16C4;</li>
                    <li>Y = &#x16CB;</li>
                    <li>Z = &#x16E3;</li>
                </ul>
            </div>

            <p>
                S is represented by the character "&#x16B2;". Below is the actual character that
                is used in the language.
            </p>
            <img class= "original" src = "/assets/images/S.png" alt= "Original S"/>
            
            <p>
                V is represented by the character "&#x16D5;". Below is the actual character that
                is used in the language.
            </p>
            <img class= "original" src = "/assets/images/V.png" alt= "Original V"/>
            
            <p>
                W is represented by the character "&#x16C4;". Below is the actual character that
                is used in the language.
            </p>
            <img class= "original" src = "assets/images/W.png" alt= "Original W"/>
        </div>
    );
}
export default L3Teach;