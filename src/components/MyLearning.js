import React from 'react'
import './MyLearningStyles.css'
const MyLearning = () => {
  return (
    <div>
     

<section class="learning_section bg-lightgreen">
    <div class="learing_container">
        <h1>My Learning</h1>
        <p>Track your progress with our <b>free</b> "My Learning" program.</p>
        <p>Log in to your account, and start earning points!</p>
        <img src="https://www.w3schools.com/myl-green-off.png" />
        <a href="https://my-learning.w3schools.com/" class="editor_btn signupFree btn">Sign Up for Free</a>
    </div>
</section>

<section class="bg-black becomeaProUser">
<div class="BecomeaPRO-container">
    <h1>Become a PRO User</h1>
    <p class="becomePro_unlock">And unlock powerful features:</p>
    <div class="becomeFeature_list">
        <div class="becomeFeature_items">
            <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg"/>
            <p>Browse W3Schools without ads</p>
        </div>
        <div class="becomeFeature_items">
            <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg"/>
            <p>Website hosting (Includes <a href="">Spaces</a> PRO)</p>
        </div>
        <div class="becomeFeature_items">
            <img src="https://www.w3schools.com/spaces/files/check3.db67d31e.svg"/>
            <p>Access to our <a href="">HTML Video Tutorial</a></p>
        </div>
    </div>
    <button class="editor_btn btn"><a href="">Learn More</a></button>
</div>
</section>
<div class="colorSection">
<div class="colorSection_container">
    <h1>Color Picker</h1>
    <p>H4Schools' famous color picker:</p>
   <a href="/htmlColor"><img src="https://www.w3schools.com/images/colorpicker.png"/></a> 
</div>
</div>

<section class="codeGame_container">
<h1>Code Game</h1>
<p>Help the Lynx collect pine cones!</p>
<img src="https://www.w3schools.com/images/w3lynx_200.png"/>
<div class="codeGameBtn_container">
    <button class="bg-black"><a href="https://www.w3schools.com/codegame/index.html">Play Game</a></button>
</div>
</section>

<div class="section_exercise">
<div class="section_exercise_container">
    <h1>Exercises and Quizzes</h1>
    <p>Test your skills!</p>
    <div class="section_exercise_quiz">
        <a href="/exercises" class="bg-lightgreen">Exercises</a>
        <a href="/tutorials" class="bg-yellow">Quizzes</a>
    </div>
</div>
</div>

<div class="webTemplate">
<div class="web_template_container">
    <h1>Web Templates</h1>
    <p>Browse our selection of <b>free</b> responsive HTML Templates</p>
    <a href="https://www.w3schools.com/w3css/w3css_templates.asp">
    <img src="https://www.w3schools.com/w3css_templates.jpg"/>
    </a>
    <a href="#" class="webTemplateLInk bg-black">Browse Templates</a>
</div>
</div>



    </div>
  )
}

export default MyLearning
