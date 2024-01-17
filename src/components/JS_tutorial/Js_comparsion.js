import React,{useState,useRef} from 'react'
import Navbar2 from "../Navbar2";
import { Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../Footer";
import './Js_comparisonStyle.css';
const Js_comparsion = () => {
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
          <h1>JavaScript Comparison and Logical Operators</h1>
          <div className='btns'>

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}
        </div><hr />
        <p class="intro">Comparison and Logical operators are used to test for <code class="w3-codespan">true</code> or 
<code class="w3-codespan">false</code>.</p>
<hr/>

<h2>Comparison Operators</h2>
<p>Comparison operators are used in logical statements to determine equality or difference between variables or values. </p>
<p>Given that <code class="w3-codespan">x = 5</code>, the table below explains the comparison operators:</p>

<div class="w3-responsive" style={{margin:"-16px 0"}}>
<table class="ws-table-all notranslate" style={ulstate}>
<tr style={ulstate}>
<th style={{width:"12%"}}>Operator</th>
<th>Description</th>
<th>Comparing</th>
<th>Returns</th>
<th style={{width:"10%"}}>Try it</th>
</tr>
<tr class="spes_table_row1" style={ulstate}>
<td rowspan="3">==</td>
<td rowspan="3">equal to</td>
<td>x == 8</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison1">Try it &raquo;</a></td> 
</tr>
<tr class="spes_table_row1" style={ulstate}>
<td>x == 5</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison2">Try it &raquo;</a></td> 
</tr>
<tr class="spes_table_row1 " style={ulstate}>
<td>x == "5"</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison12">Try it &raquo;</a></td> 
</tr>
<tr class="spes_table_row2" style={ulstate}>
<td rowspan="2">===</td>
<td rowspan="2">equal value and equal type</td>
<td>x === 5</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison4">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2" style={ulstate}>
<td>x === "5"</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison3">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row1" style={ulstate}>
<td>!=</td>
<td>not equal</td>
<td>x != 8</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison5">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2" style={ulstate}>
<td rowspan="3">!==</td>
<td rowspan="3">not equal value or not equal type</td>
<td>x !== 5</td>
<td>false</td>
<td>
<a class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison7" target="_blank">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2" style={ulstate}>
<td>x !== &quot;5&quot;</td>
<td>true</td>
<td>
<a class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison6" target="_blank">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2" style={ulstate}>
<td>x !== 8</td>
<td>true</td>
<td>
<a class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison13" target="_blank">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row1" style={ulstate}>
<td>&gt;</td>
<td>greater than</td>
<td>x &gt; 8</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison8">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2" style={ulstate}>
<td>&lt;</td>
<td>less than</td>
<td>x &lt; 8</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison9">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row1" style={ulstate}>
<td>&gt;=</td>
<td>greater than or equal to</td>
<td>x &gt;= 8</td>
<td>false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison10">Try it &raquo;</a></td>
</tr>
<tr class="spes_table_row2" style={ulstate}>
<td>&lt;=</td>
<td>less than or equal to</td>
<td>x &lt;= 8</td>
<td>true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison11">Try it &raquo;</a></td>
</tr>
</table>
</div>
<hr></hr>
<hr/>

<h2>Logical Operators</h2>
<p>Logical operators are used to determine the logic between variables or values.</p>
<p>Given that <code class="w3-codespan">x = 6</code> and <code class="w3-codespan">y = 3</code>, the table below explains the logical operators: </p>

<div class="w3-responsive" style={{margin:"-16px 0"}}>
<table class="ws-table-all notranslate">
<tr style={ulstate}>
<th style={{width:"12%"}}>Operator</th>
<th>Description</th>
<th>Example</th>
<th style={{width:"10%"}}>Try it</th>
</tr>
<tr style={ulstate}>
<td>&amp;&amp;</td>
<td>and</td>
<td> (x &lt; 10 &amp;&amp; y &gt; 1) is true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_and">Try it &raquo;</a></td>
</tr>
<tr style={ulstate}>
<td>||</td>
<td>or</td>
<td>(x == 5 || y == 5) is false</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_or">Try it &raquo;</a></td>
</tr>
<tr style={ulstate}>
<td>!</td>
<td>not</td>
<td> !(x == y) is true</td>
<td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_not">Try it &raquo;</a></td>
</tr>
</table>
</div>
<hr/>
<h2>Conditional (Ternary) Operator</h2>
<p>JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.</p>
<h3>Syntax</h3>

<div class="w3-code w3-border notranslate" style={ulstate}><div>
 <em>variablename </em>= (<em>condition</em>) ?<em> value1</em>:<em>value2</em>&nbsp;</div></div>
 <hr/>
<h2>Comparing Different Types</h2>
<p>Comparing data of different types may give unexpected results.</p>
<p>When comparing a string with a number, JavaScript will convert the string to 
a number when doing the comparison. An empty string converts to 0. A non-numeric 
string converts to <code class="w3-codespan">NaN</code> which is always <code class="w3-codespan">false</code>.</p>

<table class="ws-table-all notranslate">
 <tr style={ulstate}>
  <th>Case</th>
  <th>Value</th>
  <th style={{width:"10%"}}>Try</th>
 </tr>
 <tr style={ulstate}>
  <td>2 &lt; 12</td>
  <td>true</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_20">Try it &raquo;</a></td>
 </tr>
 <tr style={ulstate}>
  <td>2 &lt; &quot;12&quot;</td>
  <td>true</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_21">Try it &raquo;</a></td>
 </tr>
 <tr style={ulstate}>
  <td>2 &lt; &quot;John&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_23">Try it &raquo;</a></td>
 </tr>
 <tr style={ulstate}>
  <td>2 &gt; &quot;John&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_24">Try it &raquo;</a></td>
 </tr>
 <tr style={ulstate}>
  <td>2 == &quot;John&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_25">Try it &raquo;</a></td>
 </tr>
 <tr style={ulstate}>
  <td>&quot;2&quot; &lt; &quot;12&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_26">Try it &raquo;</a></td>
 </tr>
 <tr style={ulstate}>
  <td>&quot;2&quot; &gt; &quot;12&quot;</td>
  <td>true</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_27">Try it &raquo;</a></td>
 </tr>
 <tr style={ulstate}>
  <td>&quot;2&quot; == &quot;12&quot;</td>
  <td>false</td>
  <td><a target="_blank" class="w3-btn btnsmall" href="tryit.asp?filename=tryjs_comparison_28">Try it &raquo;</a></td>
 </tr>
</table>

<p>When comparing two strings, &quot;2&quot; will be greater than &quot;12&quot;, because 
(alphabetically) 1 is less than 2.</p>
<p>To secure a proper result, variables should be converted to the proper type 
before comparison:</p>
<hr/>
<h2>The Nullish Coalescing Operator (??)</h2>
<p>The <code class="w3-codespan">??</code> operator returns the first argument if it is not <b>nullish</b>
(<code class="w3-codespan">null</code> or <code class="w3-codespan">undefined</code>).</p>
<p>Otherwise it returns the second argument.</p>

            <div className='fullwi'>
  <Footer/>
  </div>
            </div></div></div>
    </div>
  )
}

export default Js_comparsion
