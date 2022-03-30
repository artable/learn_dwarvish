const L4Teach = () => {
    return (
        <div className='content-wrap'>
            <h1 className='lesson-header'>Lesson 4</h1>
            <p>
                Welcome to Lesson 4, where things get INTERESTING! Here, we will introduce a few 
                missing consonants, and explain why they are seperate. Pay attention, because the
                quizes get more fun and complex from here!
            </p>
            <p>
                <b>DISCLAIMER:</b> The digital characters come form the Unicode database, which
                does not contain the Cirth alphabet. So these characters are form the Runic library.
                Due to this, there are a few characters that did not exist. So we had to 
                substitute those characters for ones that did exist and were not being used. 
                These characters will be explained to you when necessary.
            </p>
            <p>
                Here we will cover the letters C, H, Q, and X. Don't worry, it's not to complicated,
                but it was enough that we wanted a seperate lesson to increase your understanding.
            </p>

            <h2>The Letter C</h2>
            <p>
                Going alphabetically, cause yes, we start with C. A fun letter that can be confusing 
                due to it's dual sound nature. Hence this special lesson. The Cirth Language contains
                nothing similar to the letter C. So, we have to substitute C for the appropriate 
                letter, either S or K.
            </p>
            <ul>
                <li>Hard C, aka K = &#x16B4;</li>
                <li>Soft C, aka S = &#x16B2;</li>
            </ul>
            <p>
                Keep in mind, the S character used is still a substitution for the actual, mainly larger, 
                S character shown below.
            </p>
            <img class= "original" src = "/assets/images/S.png" alt= "Original S"/>
            
            <h2>H and Mod H</h2>
            <p>
                H, suprisingly, has it's own variations. H, when after a constonant, acts slightly 
                differently. Take TH for example. The h after the T causes a change in sound. In 
                Cirth, this is more prevelant. Most consonants followed imediately by an "H" will
                be what we call a Mod H, short for Modifying H. This is used much more in the full
                Cirth language, so it won't be super relevant for english speakers.
            </p>
            <ul>
                <li>H = &#x16E6;</li>
                <li>Mod H = &#x16E7;</li>
            </ul>
            <p>
                The character for a normal H is a subistute for the character shown below. The original
                character is shown below.
            </p>
            <img class= "original" src = "/assets/images/H.png" alt= "Original H"/>
            
            <h2>Q and Qu</h2>
            <p>
                Q is fairly simple and straightforward. This is, once again, a case that is slightly
                more important in the actual language of Cirth, but for now, it is fairly easy to 
                understand. In the Cirth language, the "U" after "Q" is not necessary. This means
                that even though in the english language we put a "U" after basically every "Q", we
                don't need to in cirth. Bu this doesn't imply that there is alwasy a "U". It's a bit 
                confusing, but for the purpose of this lesson, this is a simple reminder that won't 
                impact your learning too much.
            </p>
            <ul>
                <li>Q = &#x16A9;</li>
                <li>QU = &#x16A9;</li>
            </ul>
            <p>
                Q is another character on our list on nonexistant in the Runic library. Below is the
                actual Character used. 
            </p>
            <img class= "original" src = "assets/images/Q.png" alt= "Original Q"/>

            <h2>The Letter X</h2>
            <p>
                X falls in the same category as the letter C. It does not exist, so we have to used
                the next best characters avaliable. There are two alternatives. First: "X" makes a 
                sound quite like "KS". This will be called Hard X. Second: In special circumstances, 
                normally when "X" is at the beginning of a word, it makes a "Z" sound. This will be
                called Soft X.
            </p>
            <ul>
                <li>Hard X = &#x16B4;&#x16B2;</li>
                <li>QU = &#x16E3;</li>
            </ul>
            <p>
                The case with the letter S works here too. Refer to the instructions on C, or lesson 3
                for the actual reference.
            </p>
        </div>
    );
}
export default L4Teach;