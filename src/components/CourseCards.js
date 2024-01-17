import React from 'react'
import './CourseCardsStyles.css';

const CourseCards = () => {
  return (
    <>
      <section class="course_card_container">
        <div class="courses_bigCard">
            <div class="bt bg-pink">
                <h2>PHP</h2>
                <p>A web server programming language</p>
                <a href="/jsHome">
                    <button class="bt bg-black btn">Learn PHP</button>
                </a>
            </div>
            <div class="bt bg-yellow">
                <h2>JQuery</h2>
                <p>A JS Library for developing web pages</p>
                <a href="/jsHome">
                    <button class="bt bg-black btn">Learn JQuery</button>
                </a>
            </div>
            <div class="bt bg-whites">
                <h2>Java</h2>
                <p>A programming language</p>
                <a href="/cssHome">
                    <button class="bt bg-black btn">Learn Java</button>
                </a>
            </div>
            <div class="bt bg-lightgreen">
                <h2>C++</h2>
                <p>A programming language</p>
                <a href="/htmlhome">
                    <button class="bt bg-black btn">Learn C++</button>
                </a>
            </div>
            <div class="bt bg-blue">
                <h2>H4.CSS</h2>
                <p>A CSS framework for faster and better responsive pages</p>
                <a href="/cssHome">
                    <button class="bt bg-black btn">Learn W3.CSS</button>
                </a>
            </div>
            <div class="bt bg-grey">
                <h2>Bootstrap</h2>
                <p>A CSS framework for designing better web pages</p>
                <a href="/bootHome">
                    <button class="bt bg-black btn">Learn Bootstrap</button>
                </a>
            </div>
        </div>
        <div class="courses_middleCard">
            <a href="/htmlHome" class="bt bg-pink">
                <h2>C</h2>
            </a>
            <a href="/gitHome" class="bt bg-yellow">
                <h2>C#</h2>
            </a>
        </div>
        <div class="courses_smallCard">
            <a class="bt bg-whites" href="/gitHome">R</a>
            <a class="bt bg-lightgreen" href="/bootHome">Kotlin</a>
            <a class="bt bg-blue" href="/jsHome">Node.js</a>
            <a class="bt bg-pink" href="/reactHome">React</a>
            <a class="bt bg-yellow" href="/reactHome">JSON</a>


            <a class="bt bg-grey" href="/reactHome">Angular</a>
            <a class="bt bg-lightgreen" href="/gitHome">MYSQL</a>
            <a class="bt bg-blue" href="/cssHome">XML</a>
            <a class="bt bg-pink" href="/htmlHome">Sass</a>
            <a class="bt bg-yellow" href="/htmlHome">Icon</a>

            <a class="bt bg-whites" href="/bootHome">RWD</a>
            <a class="bt bg-lightgreen" href="/bootHome">Graphics</a>
            <a class="bt bg-blue" href="/reactHome">SVG</a>
            <a class="bt bg-pink" href="/htmlHome">Canvas</a>
            <a class="bt bg-yellow" href="/cssHome">Raspberry Pi</a>

            <a class="bt bg-grey" href="/bootHome">Cyber Security</a>
            <a class="bt bg-lightgreen" href="/htmlColor">Colors</a>
            <a class="bt bg-blue" href="/gitHome">Git</a>
            <a class="bt bg-pink" href="/reactHome">Matplotlib</a>
            <a class="bt bg-yellow" href="/bootHome">NumPy</a>

            <a class="bt bg-whites" href="/reactHome">Pandas</a>
            <a class="bt bg-lightgreen" href="/gitHome">SciPy</a>
            <a class="bt bg-blue" href="/cssHome">ASP</a>
            <a class="bt bg-pink" href="/bootHome">Angular JS</a>
            <a class="bt bg-yellow" href="/jsHome">AppML</a>

            <a class="bt bg-grey" href="/gitHome">Go</a>
            <a class="bt bg-lightgreen" href="/jsHome">TypeScript</a>
            <a class="bt bg-blue" href="/gitHome">Django</a>
            <a class="bt bg-pink" href="/bootCarousel">MangoDb</a>
            <a class="bt bg-yellow" href="/cssHome">Statistics</a>

            <a class="bt bg-whites" href="/jsHome">Data Science</a>
            <a class="bt bg-lightgreen" href="/jsHome">Typing Speed</a>

        </div>

        <div class="courses_middleCard courses-middleCard-padding">
            <a href="/cssHome" class="bt bg-lightgreen">
                <h2>Excel</h2>
            </a>
            <a href="/reactHome" class="bt bg-blue">
                <h2>Google Sheets</h2>
            </a>
        </div>


        <div class="courses_middleCard courses-middleCard-padding">
            <a href="/reactHome" class="bt bg-yellow">
                <h2>Machine Learning</h2>
            </a>
            <a href="/gitHome" class="bt bg-pink">
                <h2>Artificial Intelligence</h2>
            </a>
        </div>
        
        <div class="codeEditor_part">
            <h1>Code Editor</h1>
            <p>With our online code editor, you can edit code and view the result in your browser</p>
            <div class="codeEditor_part_container">
                <div class="codeEditor_part_Container_Top">
                    <div class="codeEditor_part_left">
                        <div class="codeEditor_dot" ></div>
                        <div class="codeEditor_dot" ></div>
                        <div class="codeEditor_dot" ></div>
                    </div>
                    <div class="codeEditor_part_right">
                        www.h4schools.com/tryit/
                    </div>
                </div>
                <div class="codeEditor_condition">
                    <div class="active" id="codeEditor_frontend">Frontend</div>
                    <div class="" id="codeEditor_backend">Backend</div>
                </div>
                <img src="https://www.w3schools.com/codeeditor.gif" id="animationCodeEditorPart"/>
            </div>
            <div class="codeEditor_Btn-Container">
                <button class="bt bg-blue btn-codeEditor_down">Try Frontend Editor(HTML/CSS/JS)</button>
                <button class="bt bg-yellow btn-codeEditor_down">Try Backend Editor(PYTHON/PHP/Java/C..)</button>
            </div>
        </div>
        <div class="w3Schools_Space_container" id="spaces">
            <h1>H4 Schools Spaces</h1>
            <p>Build your own website with <a href="" class="tx-pink">H4 Schools</a>Spaces.</p>
            <img src="https://www.w3schools.com/pro/pic_spaces_ide.png"/>
            <img src="https://www.w3schools.com/how-spaces-works3.png" class="w3schools_space_image_howitwork"/>
            <button class="bt bg-yellow getStartedNowBtn">Get Started Now</button>
        </div>


    </section>
    </>
  )
}

export default CourseCards
