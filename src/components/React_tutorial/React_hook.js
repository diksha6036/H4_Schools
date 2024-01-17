import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const React_hook = () => {
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
<h2 class="heading" style={{color:"black"}}style={fd}>React Hooks</h2>
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
  <h2 class="heading" style={fd}>React Exercises</h2>

  <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>React Compiler</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Quiz</a></li>
  <li className="rcolor"><a target="_top" href="/reactCompiler"style={fd}>React Exercises</a></li>
  <li className="rcolor"><a target="_top" href="/reactHome"style={fd}>React Certificate</a></li>
  </ul></div></div>
        <div class="grid-item" id='hihi' ref={divRef}><br />
        <h1>React Hooks</h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div><hr />
<p class="intro">Hooks were added to React in version 16.8.</p>
<p class="intro">Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
<div class="w3-panel w3-note" style={yellow}>
<p>Although Hooks generally replace class components, there are no plans to remove classes from React.</p>
</div>
<hr/>
<div className='topg' style={green}> 
<h2>What is a Hook?</h2>

<p>Hooks allow us to "hook" into React features such as state and lifecycle methods.</p>
</div>
<p>You must <code class="w3-codespan">import</code> Hooks from <code class="w3-codespan">react</code>.</p>

<p>Here we are using the <code class="w3-codespan">useState</code> Hook to keep track of the application state.</p>

<p>State generally refers to application data or properties that need to be tracked.</p>
<h2>Hook Rules</h2>

<p>There are 3 rules for hooks:</p>

<ul className='introul' style={ulstate}>
<li>Hooks can only be called inside React function components.</li>
  <li>Hooks can only be called at the top level of a component.</li>
  <li>Hooks cannot be conditional</li>
</ul>

<div class="w3-panel w3-note" style={yellow}>
<p><strong>Note:</strong> Hooks will not work in React class components.</p>
</div>
<h2>Custom Hooks</h2>
<p class="intro">Hooks are reusable functions.</p>
<p class="intro">When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
<p class="intro">Custom Hooks start with "use". Example: <code class="w3-codespan">useFetch</code>.</p>
<hr></hr>
<h2>Build a Hook</h2>

<p>In the following code, we are fetching data in our <code class="w3-codespan">Home</code> component and displaying it.</p>

<p>We will use the <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a> service to fetch fake data. This service is great for testing applications when there is no existing data.</p>

<p>To learn more, check out the <a href="/js/js_api_fetch.asp">JavaScript Fetch API</a> section.</p>

<p>Use the JSONPlaceholder service to fetch fake "todo" items and display the titles on the page:</p>

<div className='fullwi'>
  <Footer/>
  </div>
        </div></div></div></div>

  )
}

export default React_hook
