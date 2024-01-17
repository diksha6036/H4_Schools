import React,{useState,useRef}  from "react";
import Navbar2 from "../Navbar2";
import { Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../Footer";
const Js_var = () => {
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
            <h1>
              JavaScript <span class="color_h1">Variables</span>
            </h1>

            <div className='btns'>

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}
        </div>
            <div class="w3-info topg" style={green}>
              <h3>Variables are Containers for Storing Data</h3>
              <p>JavaScript Variables can be declared in 4 ways:</p>
              <ul className="introul" style={green}>
                <li>Automatically</li>
                <li>
                  Using <code class="w3-codespan">var</code>
                </li>
                <li>
                  Using <code class="w3-codespan">let</code>
                </li>
                <li>
                  Using <code class="w3-codespan">const</code>
                </li>
              </ul>
            </div>
            <div class="h4-example" style={ulstate}>
              <h3>Example</h3>
              <div class="h4-code notranslate htmlHigh" style={ulstate}> 
                <span style={{ color: "brown" }}>
                  x = <span style={{ color: "red" }}>5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  y = <span style={{ color: "red" }}>6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  z = <span style={{ color: "brown" }}>x + y ;</span>
                </span>
                <br />
              </div>{" "}
              <div className="trybtn">
                {" "}
                <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="w3-panel w3-note" style={yellow}>
              <h2>Note</h2>
              <p>
                It is considered good programming practice to always declare
                variables before use.
              </p>
            </div>
            <p>From the examples you can guess:</p>
            <ul className="introul" style={ulstate}>
              <li>x stores the value 5</li>
              <li>y stores the value 6</li>
              <li>z stores the value 11</li>
            </ul>
            <div class="h4-example" style={ulstate}>
              <h3>Example Using var</h3>
              <div class="h4-code notranslate htmlHigh" style={ulstate}>
                <span style={{ color: "brown" }}>
                  var x = <span style={{ color: "red" }}>5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  var y = <span style={{ color: "red" }}>6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  var z = <span style={{ color: "brown" }}>x + y ;</span>
                </span>
                <br />
              </div>{" "}
              <div className="trybtn">
                {" "}
                <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="w3-panel w3-note" style={yellow}>
              <h2>Note</h2>
              <p>
                The <code class="w3-codespan">var</code> keyword was used in all
                JavaScript code from 1995 to 2015.
              </p>
              <p>
                The <code class="w3-codespan">let</code> and{" "}
                <code class="w3-codespan">const</code> keywords were added to
                JavaScript in 2015.
              </p>
              <p>
                The <code class="w3-codespan">var</code> keyword should only be
                used in code written for older browsers.
              </p>
            </div>
            <div class="h4-example" style={ulstate}>
              <h3>Example Using let</h3>
              <div class="h4-code notranslate htmlHigh" style={ulstate}>
                <span style={{ color: "brown" }}>
                  let x = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  let y = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  let z = <span style={{ color: "brown" }}> x + y ;</span>
                </span>
                <br />
              </div>{" "}
              <div className="trybtn">
                {" "}
                <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="h4-example" style={ulstate}>
              <h3>Example Using Const</h3>
              <div class="h4-code notranslate htmlHigh" style={ulstate}>
                <span style={{ color: "brown" }}>
                  const x = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  const y = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  const z = <span style={{ color: "brown" }}> x + y ;</span>
                </span>
                <br />
              </div>
              <div className="trybtn">
                {" "}
                <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="h4-example" style={ulstate}>
              <h3>Mixed Example</h3>
              <div class="h4-code notranslate htmlHigh" style={ulstate}>
                <span style={{ color: "brown" }}>
                  const price1 = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  const price2 = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                  let z = <span style={{ color: "brown" }}> price1 + price2 ;</span>
                </span>
                <br />
              </div>
              <div className="trybtn">
                {" "}
                <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <p>The two variables <code class="w3-codespan">price1</code> and <code class="w3-codespan">price2</code>
are declared with the <code class="w3-codespan">const</code> keyword.</p>
<p>These are constant values and cannot be changed.</p>
<p>The variable <code class="w3-codespan">total</code> is declared with the <code class="w3-codespan">let</code> keyword.</p>
<p>The value <code class="w3-codespan">total</code> can be changed.</p>
<div class="w3-panel w3-note" style={yellow}>
<h2>When to Use var, let, or const?</h2>
<p>1. Always declare variables</p>
<p>2. Always use <code class="w3-codespan">const</code> if the value should not be changed</p>
<p>3. Always use <code class="w3-codespan">const</code> if the type should not be changed (Arrays and Objects)</p>
<p>4. Only use <code class="w3-codespan">let</code> if you can't use <code class="w3-codespan">const</code></p>
<p>5. Only use <code class="w3-codespan">var</code> if you MUST support old browsers.</p>
</div>
<hr/>
<h2>Just Like Algebra</h2>

<p>Just like in algebra, variables hold values:</p>
<div class="h4-example" style={ulstate}>
              <div class="h4-code notranslate htmlHigh" style={ulstate}>
                <span style={{ color: "brown" }}>
                  let x = <span style={{ color: "red" }}> 5;</span>
                </span>
                <br />
                <span style={{ color: "brown" }}>
                 let y  = <span style={{ color: "red" }}> 6;</span>
                </span>
                <br />
              </div>
              <div className="trybtn">
                {" "}
                <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>
                  <a
                    href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default"
                    className="restyle"
                    target="_blank"
                  >
                    Try it Yourself&raquo;
                  </a>
                </Button>{" "}
              </div>
            </div>
            <div class="w3-panel w3-note" style={yellow}>
<h2>Note</h2>
<p>Variables are containers for storing values.</p>
</div>
<h2>JavaScript Identifiers</h2>
<p>All JavaScript <strong>variables</strong> must be
<strong>identified</strong> with <strong>unique names</strong>.</p>
<p>These unique names are called <strong>identifiers</strong>.</p>

<p>Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).</p>
<p>The general rules for constructing names for variables (unique identifiers) are:</p>
<ul className="introul" style={ulstate}>
  <li>Names can contain letters, digits, underscores, and dollar signs.</li>
  <li>Names must begin with a letter.</li>
  <li>Names can also begin with $ and _ (but we will not use it in this tutorial).</li>
  <li>Names are case sensitive (y and Y are different variables).</li>
  <li>Reserved words (like JavaScript keywords) cannot be used as names.</li>
</ul>

<div class="w3-panel w3-note" style={yellow}>
<h2>Note</h2>
<p>JavaScript identifiers are case-sensitive.</p>
</div>
<hr/>
<h2>JavaScript Data Types</h2>
<p>JavaScript variables can hold numbers like 100 and text values like &quot;John 
Doe&quot;.</p>
<p>In programming, text values are called text strings.</p>
<p>JavaScript can handle many types of data, but for now, just think of numbers and strings. </p>

<p>Strings are written inside double or single quotes. Numbers are written 
without quotes.</p>
<p>If you put a number in quotes, it will be treated as a text string.</p>
<hr/>

<h2>Value = undefined</h2>
<p>In computer programs, variables are often declared without a value. The value 
can be something that has to be calculated, or something that will be provided 
later, like user input.</p>
<p>A variable declared without a value will have the value <code class="w3-codespan">
undefined</code>.</p>
<p>The variable carName will have the value <code class="w3-codespan">undefined</code> after the execution of this statement:</p>

            <div className='fullwi'>
  <Footer/>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Js_var;
