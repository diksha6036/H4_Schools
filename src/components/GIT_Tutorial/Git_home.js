import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Git_homeStyle.css';
const Git_home = () => {
  const divRef = useRef(null);
  const handleButtonClick=()=>{
    const scrollDuration = 20000;
    const scrollInterval = 10;
    const targetPosition = divRef.current.scrollHeight - divRef.current.clientHeight;
    let scrollPosition = 0;
    const scrollStep = (targetPosition * scrollInterval) / scrollDuration;
    const scrollIntervalId = setInterval(() => {
      if (scrollPosition < targetPosition) {
        divRef.current.scrollTop += scrollStep;
        scrollPosition += scrollStep;
      } else {
        clearInterval(scrollIntervalId);
      }
    }, scrollInterval);
  }

  const [mystyle,setMystyle]=useState({
    color:"black",
    backgroundColor:"white"
  })
  const [fd,setMyfd]=useState({
       color:'black',
       backgroundColor:'#E7E9EB'
  })
  const [ulstate,setul]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const [moon,setMymoon]=useState({
    color:"black",
    fontSize:30
  })
  const [green,setGreen]=useState({
    color:'black',
    backgroundColor:'#aad6ec'
  })
  
  const [yellow,setYellow]=useState({
    color:'black',
    backgroundColor:'	#90a3b4'
  })
  const [excer,setExcer]=useState({
    color:'black',
    backgroundColor:'white'
  })
const toggle=()=>{
    if(mystyle.color=='white'){
      setMystyle({
        color:"black",
        backgroundColor:'white'
      })
    }
    else{
      setMystyle({
        color:'white',
        backgroundColor:'black'
      })
    }
    if(fd.backgroundColor=="#E7E9EB"){
      setMyfd({
        color:'white',
        backgroundColor:'black'
      })
    }
    else{
      setMyfd({
        color:'black',
        backgroundColor:'#E7E9EB'
      })
    }

    if(moon.color=='white'){
      setMymoon({
        color:"black",
        fontSize:30
      })
    }
    else{
      setMymoon({
        color:'white',
        fontSize:30
      })
    }
    if(green.backgroundColor=='#aad6ec'){
      setGreen({
        color:'white',
        backgroundColor:'transparent'

      })
    }
    else{
      setGreen({
        color:'black',
        backgroundColor:'#aad6ec'
      })
    }
    if(excer.backgroundColor=='white'){
      setExcer({
        color:'white',
        backgroundColor:'black'
      })
    }
    else{
      setExcer({
        color:'black',
        backgroundColor:'white'
      })
    }
    if(ulstate.color=='black'){
      setul({
        color:'white',
      backgroundColor:'black'

      })
    }
    else{
      setul({
        color:'black',
        backgroundColor:'white'
      })
    }
    if(yellow.color=='black'){
      setYellow({
        color:'white',
        backgroundColor:'black'
      })
    }
    else{
      setYellow({
        color:'black',
        backgroundColor:'#90a3b4'
      })
    }

  }
  return (
    <div style={mystyle}>
       <Navbar2/>
      <div class="grid-container">
        <div className="grid-item fd " expand="lg" style={fd}><br />
            <h3 className='heading'>Git Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/gitHome" style={fd}>Git HOME</a></li>
   <li className="rcolor"><a target="_top" href="/gitCommit" style={fd}>Git Intro</a></li>
    <li className="rcolor"><a target="_top" href="/githubFlow" style={fd}>Git Get Started</a></li>
   <li className="rcolor"><a target="_top" href="/gitIgnore" style={fd}>Git New Files</a></li>
   <li className="rcolor"><a target="_top" href="/gitHome" style={fd}>Git Staging Environment</a></li>
   <li className="rcolor"><a target="_top" href="/gitCommit" style={fd}>Git Commit</a></li>
   <li className="rcolor"><a target="_top" href="/githubFlow" style={fd}>Git Help</a></li>
   <li className="rcolor"><a target="_top" href="/gitIgnore" style={fd}>Git Branch</a></li>
   <li className="rcolor"><a target="_top" href="/gitHome" style={fd}>Git Branch Merge</a></li>
   <li className="rcolor"><a target="_top" href="/gitCommit" style={fd}>GitHub Get Started</a></li>
    <li className="rcolor"><a target="_top" href="/githubFlow" style={fd}>GitHub Edit Code</a></li>
    <li className="rcolor"><a target="_top" href="/gitIgnore" style={fd}>Pull from GitHub</a></li>
<li className="rcolor"><a target="_top" href="/gitHome" style={fd}>Push to GitHub</a></li>
<li className="rcolor"><a target="_top" href="/githubFlow" style={fd}>GitHub Branch</a></li>
<li className="rcolor"><a target="_top" href="/gitCommit" style={fd}>Pull Branch from GitHub</a></li>

  <li className="rcolor"><a target="_top" href="/gitHome" style={fd}>Push Branch to GitHub</a></li>
  <li className="rcolor"><a target="_top" href="/githubFlow" style={fd}>GitHub Flow</a></li>
  <li className="rcolor"><a target="_top" href="/gitIgnore" style={fd}>GitHub Pages</a></li>
<br />
<h2 class="heading"  style={fd}>Git Contribute</h2>
<li className="rcolor"><a target="_top" href="/gitCommit" style={fd}>GitHub Fork</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/gitHome" style={fd}>Git Clone from GitHub</a></li>
  <li className="rcolor"><a target="_top" href="/githubFlow" style={fd}>GitHub Send Pull Request</a></li>
  <li className="rcolor"><a target="_top" href="/gitIgnore" style={fd}>Git .gitignore</a></li>
  <li className="rcolor"><a target="_top" href="/gitCommit" style={fd}>Git Security SSH</a></li>
</div>
<li className="rcolor"><a target="_top" href="/gitHome" style={fd}>GitHub Add SSH</a></li>
<li className="rcolor"><a target="_top" href="/githubFlow" style={fd}>Git Revert</a></li>
<li className="rcolor"><a target="_top" href="/gitIgnore" style={fd}>Git Reset</a></li>
  <li className="rcolor"><a target="_top" href="/gitCommit" style={fd}>Git Amend</a></li><br />
  <h2 class="heading"  style={fd}>Git Exercises</h2>

  <li className="rcolor"><a target="_top" href="/gitHome" style={fd}>Git Quiz</a></li>
  </ul></div></div>
        <div class="grid-item" id='hihi' ref={divRef}><br />
        <h1>Git <span class="color_h1">Tutorial</span></h1>
        <div className='btns'>
     

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}

        </div>
<div class="w3-panel w3-info intro topg" style={green}>
<p>Git is a version control system.</p>
<p>Git helps you keep track of code changes.</p>
<p>Git is used to collaborate on code.</p>
</div>
<h2>Learning by Examples</h2>
<p>In this tutorial, we will show you Git commands like this:</p>

<div class="w3-example">
  <h3>Example</h3>
<pre class="command-line" data-output="2" data-user="user" data-host="localhost"><code class="language-shell" style={{backgroundColor:"black",color:"white"}}>git --version
git version 2.30.2.windows.1</code></pre>
</div>
<p>For new users, using the terminal view can seem a bit complicated. Don't worry! We will keep it really simple, and learning this way gives you a good grasp of how Git works.</p>
<p>In the code above, you can see commands (input) and output.</p>
<p>Lines like this are commands we input:</p>
<div class="w3-example">
  <h3>Example</h3>
<pre class="command-line" data-user="user" data-host="localhost"><code class="language-shell" style={{backgroundColor:"black",color:"white"}}>git --version</code></pre>
</div>
<p>Lines like this are the output/response to our commands:</p>
<div class="w3-example">
  <h3>Example</h3>
<pre class="command-line" data-output="1" data-user="user" data-host="localhost"><code class="language-shell" style={{backgroundColor:"black",color:"white"}}>git version 2.30.2.windows.1</code></pre>
</div>
<p>In general, lines with <code>$</code> in front of it is input. These are the commands you can copy and run in your terminal.</p>
<hr></hr>
<h2>Git and Remote Repositories</h2>
<p>Git and GitHub are different things.</p>
<p>In this tutorial you will understand what Git is and how to use it on the remote repository platforms, like GitHub.</p>
<p>You can choose, and change, which platform to focus on by clicking in the menu on the right:</p>
<hr style={{clear:"both"}}/>
<h2>Git Exercises</h2>
<form autocomplete="off" id="w3-exerciseform" action="exercise.asp?filename=exercise_getstarted1" method="post" target="_blank">
<h2>Test Yourself With Exercises</h2>
<div class="exercisewindow" style={ulstate}>
<h2>Exercise:</h2>
<p>Insert the missing part of the command to check which version of Git (if any) 
is installed.</p>
<div class="exerciseprecontainer" style={ulstate}>
<pre>
git <input name="ex1" maxlength="9" style={{width: "100px"}}/>
</pre>
</div>
<br/>
<button type="submit" class="w3-btn w3-margin-bottom">Submit Answer &raquo;</button>
<p>
<a target="_blank" href="exercise.asp?filename=exercise_getstarted1">Start the Exercise</a></p>
</div>
</form>
<hr></hr>

<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div>
  )
}

export default Git_home
