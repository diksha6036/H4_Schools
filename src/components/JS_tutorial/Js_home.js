import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Js_home = () => {
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
       <div>
      <Navbar2/>
      <div class="grid-container">
        <div className="grid-item fd " expand="lg" style={fd}><br />
            <h3 className='heading'>JS Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/jsHome" style={fd}>JS HOME</a></li>
   <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Introduction</a></li>
    <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Where To</a></li>
   <li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Output</a></li>
   <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Statements</a></li>
   <li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS Syntax</a></li>
   <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Comments</a></li>
   <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Variables</a></li>
   <li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Let</a></li>
   <li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS Const</a></li>
    <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Operators</a></li>
    <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Arithmetic</a></li>
<li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Assignment</a></li>
<li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Data Types</a></li>
<li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Functions</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Objects</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Events</a></li>
  <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Strings</a></li>
</div>
<li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS String Methods</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS String Search</a></li>
  <li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS String Templates</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Numbers</a></li>
  <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS BigInt</a></li>
</div>
<li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Number Methods</a></li>
<li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Number Properties</a></li>
<li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS Arrays</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Array Methods</a></li>
  <li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS Array Sort</a></li>
  <li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Array Iteration</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Array Const</a></li>
  <li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS Dates</a></li>
  <li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Date Formats</a></li>
  <li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Date Get Methods</a></li>
  <li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Date Set Methods</a></li>
</div>



<li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Math</a></li>
<div class="tut_overview">
<li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Random</a></li>
<li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS Booleans</a></li>
<li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Comparisons</a></li>
<li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS If Else</a></li>
</div>
<li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Switch</a></li>
<li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Loop For</a></li>
<li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Loop For In</a></li>
<li className="rcolor"><a target="_top" href="/jsComp"style={fd}>JS Loop While</a></li>
<li className="rcolor"><a target="_top" href="/jsHome"style={fd}>JS Break</a></li>
<li className="rcolor"><a target="_top" href="/jsBitwise"style={fd}>JS Bitwise</a></li>
<li className="rcolor"><a target="_top" href="/jsVar"style={fd}>JS Type Conversion</a></li></ul></div></div>
        <div class="grid-item" id='hihi' ref={divRef}><br />
            
<h1>JavaScript <span class="color_h1">Tutorial</span></h1>
<div className='btns'>

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}
        </div><hr />
        <div className='topg' style={green}>
        <p>JavaScript is the world's most popular programming language.</p>
<p>JavaScript is the programming language of the Web.</p>
<p>JavaScript is easy to learn.</p>
<p>This tutorial will teach you JavaScript from basic to advanced.</p>
</div>

<hr/>
<h2>Use the Menu</h2>
<p>We recommend reading this tutorial, in the sequence listed in the menu.</p>
<p>If you have a large screen, the menu will always be present on the left.</p>
<p>If you have a small screen, open the menu by clicking the top menu sign <span class="w3-xlarge">&#9776;</span>.</p>
<hr></hr><h2>Learn by Examples</h2>
<p>Examples are better than 1000 words. Examples are often easier to understand 
than text explanations.</p>
<p>This tutorial supplements all explanations with clarifying &quot;Try it Yourself&quot; examples.</p>
<div class="w3-panel w3-note" style={yellow}>
<p>If you try all the examples, you will learn a lot about JavaScript, in a very short time!</p></div>
<h2>Why Study JavaScript?</h2>
<p>JavaScript is one of the <strong>3 languages</strong> all web developers <strong>
must</strong> 
learn:</p>
<p>&nbsp;&nbsp; 1. <a href="/html/default.asp" style={{color:"black",textDecoration:"none"}}><strong >HTML</strong></a> to define the content of web pages</p>
<p>&nbsp;&nbsp; 2. <a href="/css/default.asp" style={{color:"black",textDecoration:"none"}}><strong >CSS</strong></a> to specify the layout of web pages</p>
<p>&nbsp;&nbsp; 3. <strong>JavaScript</strong> to program the behavior of web pages </p>
<div class="w3-panel w3-info topg" style={green}>
<p>This tutorial covers every version of JavaScript:</p>
<ul className='introul' style={green}>
<li>The Original JavaScript ES1 ES2 ES3 (1997-1999)</li>
<li>The First Main Revision ES5 (2009)</li>
<li>The Second Revision ES6 (2015)</li>
<li>All Yearly Additions (2016, 2017, 2018, 2019, 2020)</li>
</ul>
</div>
<h2>Learning Speed</h2>
<p>In this tutorial, the learning speed is your choice.</p>
<p>Everything is up to you.</p>
<p>If you are struggling, take a break, or re-read the material.</p>
<p><strong>Always</strong> make sure you understand <strong>all</strong> the &quot;Try-it-Yourself&quot; 
examples.</p>
<p>The only way to become a clever programmer is to:
Practice. Practice. Practice. Code. Code. Code !</p>
<hr></hr>
<hr/>
<h2>Commonly Asked Questions</h2>
<ul className='introul' style={green}>
<li>How do I get JavaScript?</li>
<li>Where can I download JavaScript?</li>
<li>Is JavaScript Free?</li>
</ul>
<b>
<p>You don't have to get or download JavaScript.</p>
<p>JavaScript is already running in your browser on your computer,
on your tablet, and on your smart-phone.</p>
<p>JavaScript is free to use for everyone.</p>
</b><div className='fullwi'>
  <Footer/>
  </div>
</div>
            </div></div></div>

  )
}

export default Js_home
