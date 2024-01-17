import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Git_commit = () => {
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
        <h1>Git <span class="color_h1">Commit</span></h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div><hr />
<div className='topg' style={green}>
<h2>Git Commit</h2>
<p>Since we have finished our work,  
we are ready move from <code class="w3-codespan">stage</code> to <code class="w3-codespan">commit</code> 
for our repo.</p>
<p>Adding commits keep track of our progress and changes as we work. Git 
considers each <code class="w3-codespan">commit</code> change point or &quot;save point&quot;. It is a point in the project 
you can go back to if you find a bug, or want to make a change.</p>
<p>When we <code class="w3-codespan">commit</code>, we should <strong>always</strong> include a <strong>message</strong>.</p>
<p>By adding clear messages to each <code class="w3-codespan">commit</code>, it is easy for yourself (and others) 
to see what has changed and when.</p></div>
<p>The <code class="w3-codespan">commit</code>  command performs a commit, and the <code class="w3-codespan">-m &quot;<em>message</em>&quot;</code> adds a message.</p>
<p>The Staging Environment has been committed to our repo, with the message:<br/>&quot;First release of Hello World!&quot;</p>
<hr></hr>
<h2>Git Commit without Stage</h2>
<p>Sometimes, when you make small changes, using the staging environment seems like a waste of time. It is possible to commit changes directly, skipping the staging environment.
The <code class="w3-codespan">-a</code> option will automatically stage every 
changed, already tracked file.</p>
<p>Let's add a small update to index.html:</p>
<div class="w3-panel w3-note" style={yellow}>
  <p><strong>Note:</strong> Short status flags are:</p>
  <ul className='introul' style={yellow}>
    <li>?? - Untracked files</li>
    <li>A - Files added to stage</li>
    <li>M - Modified files</li>
    <li>D - Deleted files</li>
  </ul>
</div>
<div class="w3-panel w3-warning" style={green}>
  <p><strong>Warning:</strong> Skipping the Staging Environment is not generally recommended.</p>
  <p>Skipping the stage step can sometimes make you include unwanted changes.</p>
</div>
<h2>Git Commit Log</h2>
<p>To view the history of commits for a repository, you can use the <code class="w3-codespan">log</code> command:</p><hr/>
<form autocomplete="off" id="w3-exerciseform" action="exercise.asp?filename=exercise_commit1" method="post" target="_blank">
<h2>Test Yourself With Exercises</h2>
<div class="exercisewindow" style={ulstate}>
<h2>Exercise:</h2>
<p>Commit the changes to the current repository with the message "First release!</p>
<div class="exerciseprecontainer" style={ulstate}>
<pre>
git <input name="ex1" maxlength="6" style={{width: "80px"}}/> <input name="ex2" maxlength="2" style={{width: "30px"}}/> "First release!"/
</pre>
</div>
<br/>
<button type="submit" class="w3-btn w3-margin-bottom">Submit Answer &raquo;</button>
<p>
<a target="_blank" href="exercise.asp?filename=exercise_commit1">Start the Exercise</a></p>
</div>
</form>
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div>
  )
}

export default Git_commit
