import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const REACT_home = () => {
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
       <div style={mystyle}>
      <Navbar2/>
      <div class="grid-container">
        <div className="grid-item fd " expand="lg" style={fd}><br />
            <h3 className='heading'>REACT Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Home</a></li>
   <li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>React Intro</a></li>
    <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>React Get Started</a></li>
   <li className="rcolor"><a target="_top" href="/reactHook"style={fd}>React Upgrade</a></li>
   <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React ES6</a></li>
   <li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>React Render HTML</a></li>
   <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>React JSX</a></li>
   <li className="rcolor"><a target="_top" href="/reactHook"style={fd}>React Components</a></li>
   <li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>React Class</a></li>
   <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>React Props</a></li>
    <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Events</a></li>
    <li className="rcolor"><a target="_top" href="/reactHook"style={fd}>React Conditionals</a></li>
<li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>React Lists</a></li>
<li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Forms</a></li>
<li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>React Router</a></li>

  <li className="rcolor"><a target="_top" href="/reactHook"style={fd}>React Memo</a></li>
  <li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>React CSS Styling</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Sass Styling</a></li>
<br />
<h2 class="heading" style={fd}>React Hooks</h2>
<li className="rcolor"><a target="_top" href="/reactHook"style={fd}>What is a Hook?</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/reactHook"style={fd}>useState</a></li>
  <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>useEffect</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>useContext</a></li>
  <li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>useRef</a></li>
</div>
<li className="rcolor"><a target="_top" href="/reactHook"style={fd}>useReducer</a></li>
<li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>useCallback</a></li>
<li className="rcolor"><a target="_top" href="/reactHome"style={fd}>useMemo</a></li>
  <li className="rcolor"><a target="_top" href="/reactRouter"style={fd}>Custom Hooks</a></li><br />
  <h2 class="heading" style={{color:"black"}} style={fd}>React Exercises</h2>

  <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>React Compiler</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Quiz</a></li>
  <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>React Exercises</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Certificate</a></li>
  </ul></div></div>
        <div class="grid-item" id='hihi' ref={divRef}><br />
        <h1>React Tutorial</h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div><hr />
<div class="w3-panel w3-info intro topg" style={green}>

  <p>React is a JavaScript library for building user interfaces.</p>
  <p>React is used to build single-page applications.</p>
  <p>React allows us to create reusable UI components.</p>
</div>

<hr></hr>
<h2>Create React App</h2>

<p>To learn and test React, you should set up a React Environment on 
your computer.</p>
<p>This tutorial uses the <code class="w3-codespan">create-react-app</code>.</p>

<p>The <code class="w3-codespan">create-react-app</code> tool is an officially supported way to create React applications.</p>
<p><a href="https://nodejs.org" target="_blank">Node.js</a> is required to use <code class="w3-codespan">create-react-app</code>.</p>

<p>Open your terminal in the directory you would like to create your 
application.</p>
<p>Run this command to create a React application named
<code class="w3-codespan">my-react-app</code>:</p>

<div class="w3-example">
<div class="w3-code notranslate w3-black" style={ulstate}>
  npx create-react-app my-react-app
</div>
</div>

<p><code class="w3-codespan">create-react-app</code> will set up everything you need to run a React application.</p>

<div class="w3-panel w3-note" style={yellow}>
<p><strong>Note:</strong>
If you've previously installed <code class="w3-codespan">create-react-app</code> globally,
it is recommended that you uninstall the package to ensure npx always uses the latest version of
<code class="w3-codespan">create-react-app</code>.
To uninstall, run this command: <code class="w3-codespan">npm uninstall -g create-react-app</code>.
</p>
</div>
<hr/>

<h2>Run the React Application</h2>

<p>Run this command to move to the <code class="w3-codespan">my-react-app</code> directory:</p>

<div class="w3-example">
<div class="w3-code notranslate w3-black" style={{backgroundColor:"black",color:"white"}}>
  cd my-react-app
</div>
</div>

<p>Run this command to execute the React application <code class="w3-codespan">
my-react-app</code>:</p>

<div class="w3-example">
<div class="w3-code notranslate w3-black" style={{backgroundColor:"black",color:"white"}}>
  npm start
</div>
</div>
<p>A new browser window will pop up with your newly created React App! If not, open your browser and type 
<code class="w3-codespan">localhost:3000</code> in the address bar.</p>

<p>The result:</p>

<div class="w3-container w3-margin-top">
<img src="https://www.w3schools.com/react/screenshot_myfirstreact.png" style={{maxWidth:"100%"}}/>
</div>
<br/>

<div class="w3-panel w3-note" style={yellow}>
<p>You will learn more about the <code class="w3-codespan">create-react-app</code> in the <a href="react_getstarted.asp">React Get Started</a> chapter.</p>
</div>
<hr/>


<h2>What You Should Already Know</h2>
<p>Before starting with React.JS, you should have intermediate experience in:</p>
<ul className='introul' style={ulstate}>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
</ul>

<p>You should also have some experience with the new JavaScript features 
introduced in ECMAScript 6 (ES6), you will learn about them in the <a href="react_es6.asp">React ES6</a> chapter.</p>
<hr></hr>

<div className='fullwi'>
  <Footer/>
  </div>
            </div></div></div>
    </div>
  )
}

export default REACT_home
