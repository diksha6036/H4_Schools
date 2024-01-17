import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const React_compiler = () => {
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
        <h1>React <span class="color_h1">Online Compiler</span></h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
<hr/>

<div className='topg' style={green}>
<h2>React.js Compiler (Editor)</h2>
<p>Create your own website and React.js applications with a Node.js environment in H4Schools Spaces.</p>
<p>H4Schools Spaces is a website-building tool that enables you to create and share your own website, as well as develop and host your React.js applications within a Node.js environment.</p>
<p>You have full control over the website's appearance and functionality by editing the code directly in your web browser.</p>
<p>W3Schools Spaces is user-friendly and requires no setup, making it easy to use.</p>
<p>Get started with React.js by selecting the Node.js environment in Spaces.</p>
</div>
<p>The code editor is packed with features to help you achieve more:</p>
<ul className='introul' style={ulstate}>
  <li><strong>Templates:</strong> Start from scratch or use a template</li>
  <li><strong>Cloud-based:</strong> no installations required. You only need your browser</li>
  <li><strong>Terminal & Log:</strong> debug and troubleshoot your code easily</li>
  <li><strong>File Navigator:</strong> switch between files inside the code editor</li>
  <li><strong>And much more!</strong></li>
</ul>
<h2>Learn Faster</h2>
<p>Practice is key to mastering coding, and the best way to put your React.js knowledge into practice is by getting practical with code. </p>
<p>Use <a href="/spaces/index.html">H4Schools Spaces</a> to build, test and deploy code.</p>
<p>The code editor lets you write and practice different types of computer languages. It includes 
React.js, but you can use it for other languages too. </p>
<p>New languages are added all the time:</p>
<div class="w3-center ws-grey w3-round" style={{padding:"40px 20px"}}>
  <img class="image" src="https://www.w3schools.com/spaces/languages.png" alt="Languages" style={{maxWidth:"550px",width:"100%"}}/>
</div>
<div class="w3-note w3-panel" style={yellow}>
  <p>If you don't know React, we suggest that you read our <a href="default.asp">React Tutorial</a> from scratch.</p>
</div>
<h2>Easy Package Management</h2>
<p>Get an overview of your packages and easily add or delete frameworks and libraries. Then, with just one click, you can make changes to your packages without manual installation.</p>
<p><img src="https://www.w3schools.com/images/packages_spaces.png" style={{maxWidth:"100%",borderRadius:"5px"}}/></p>

<hr></hr>
<h2>Share Your Website With The World</h2>

<p>Host and publish your websites in no time with <a href="/spaces/index.html">W3School Spaces</a>.</p>

<p>W3Schools subdomain and SSL certificate are included for free with <a href="/spaces/index.html">W3School Spaces</a>. An SSL certificate makes your website safe and secure. It also helps people trust your website and makes it easier to find it online.</p>
<p><strong>Want a custom domain for your website?</strong></p>
<p>You can buy a domain or transfer an existing one and connect it to your space.</p><hr />
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div></div>
  )
}

export default React_compiler
