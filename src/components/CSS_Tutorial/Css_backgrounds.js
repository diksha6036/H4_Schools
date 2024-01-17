import React,{useState,useRef}  from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Css_backgroundStyle.css';
const Css_backgrounds = () => {
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
          <h3 className="heading">CSS Tutorial</h3>
          <div className="newd">
            <ul className="ul1">
              <li className="rcolor">
                <a target="_top" href="/cssHome" style={fd}>
                  CSS Home
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground" style={fd}>
                  CSS Introduction
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssFont" style={fd}>
                  CSS Syntax
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssnav" style={fd}>
                  CSS Selectors
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssHome" style={fd}>
                  CSS How To
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground" style={fd}>
                  CSS Comments
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssFont" style={fd}>
                  CSS Colors
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground" style={fd}>
                  CSS Backgrounds
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssHome"style={fd}>
                  CSS Borders
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground"style={fd}>
                  CSS Margins
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssHome"style={fd}>
                  CSS Padding
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground"style={fd}>
                  CSS Height/Width
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssnav"style={fd}>
                  CSS Box Model
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssHome"style={fd}>
                  CSS Outline
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssFont"style={fd}>
                  CSS Text
                </a>
              </li>
              <div class="tut_overview">
                <li className="rcolor">
                  <a target="_top" href="/cssFont"style={fd}>
                    CSS Fonts
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssHome"style={fd}>
                    CSS Icons
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssBackground"style={fd}>
                    CSS Links
                  </a>
                </li>
              </div>
              <li className="rcolor">
                <a target="_top" href="/cssHome"style={fd}>
                  CSS Lists
                </a>
              </li>
              <div class="tut_overview">
                <li className="rcolor">
                  <a target="_top" href="/cssFont"style={fd}>
                    CSS Tables
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssBackground"style={fd}>
                    CSS Display
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssHome"style={fd}>
                    CSS Max-width
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssnav"style={fd}>
                    CSS Position
                  </a>
                </li>
              </div>
              <li className="rcolor">
                <a target="_top" href="/cssnav"style={fd}>
                  CSS Z-index
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssFont"style={fd}>
                  CSS Overflow
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground"style={fd}>
                  CSS Float
                </a>
              </li>
              <div class="tut_overview">
                <li className="rcolor">
                  <a target="_top" href="/cssnav"style={fd}>
                    CSS Inline-block
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssFont"style={fd}>
                    CSS Align
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssBackground"style={fd}>
                    CSS Combinators
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssFont"style={fd}>
                    CSS Pseudo-class
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssBackground"style={fd}>
                    CSS Pseudo-element
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssnav"style={fd}>
                    CSS Opacity
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssnav"style={fd}>
                    CSS Navigation Bar
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssBackground"style={fd}>
                    CSS Dropdowns
                  </a>
                </li>
              </div>

              <li className="rcolor">
                <a target="_top" href="/cssFont"style={fd}>
                  CSS Image Gallery
                </a>
              </li>
              <div class="tut_overview">
                <li className="rcolor">
                  <a target="_top" href="/cssnav"style={fd}>
                    CSS Image Sprites
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssBackground"style={fd}>
                    CSS Attr Selectors
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssFont"style={fd}>
                    CSS Forms
                  </a>
                </li>
                <li className="rcolor">
                  <a target="_top" href="/cssnav"style={fd}>
                    CSS Counters
                  </a>
                </li>
              </div>
              <li className="rcolor">
                <a target="_top" href="/cssHome"style={fd}>
                  CSS Website Layout
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground"style={fd}>
                  CSS Units
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssFont"style={fd}>
                  CSS Specificity
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssHome"style={fd}>
                  CSS !important
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssnav"style={fd}>
                  CSS Math Functions
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssBackground"style={fd}>
                  CSS Rounded Corners
                </a>
              </li>
              <li className="rcolor">
                <a target="_top" href="/cssnav"style={fd}>
                  CSS Border Images
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="grid-item" id='hihi' ref={divRef}><br />
        <h1>CSS <span class="color_h1">Backgrounds</span></h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
<hr/>
<p class="intro">The CSS background properties are used to add background effects 
for elements.</p>
<hr/>

<div style={{color:"#000",width:"100%",border:"1px solid gray",padding:"16px",background:"#e1efbb url('https://www.w3schools.com/css/mountain.jpg')"}}>
<p>In these chapters, you will learn about the following CSS background properties:</p>
<ul className='introul'>
  <li> <code class="w3-codespan" style={{color:"crimson"}}>background-color</code></li>
  <li> <code class="w3-codespan" style={{color:"crimson"}}>background-image</code></li>
  <li> <code class="w3-codespan" style={{color:"crimson"}}>background-repeat</code></li>
  <li> <code class="w3-codespan" style={{color:"crimson"}}>background-attachment</code></li>
  <li> <code class="w3-codespan" style={{color:"crimson"}}>background-position</code></li>
  <li> <code class="w3-codespan" style={{color:"crimson"}}>background</code> (shorthand property)</li>
</ul>
</div>
<hr></hr>
<h2>CSS background-color</h2>
<p>The <code class="w3-codespan">background-color</code> property specifies the background color of an element.</p>
<div class="h4-example" style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={ulstate}>
<span style={{color:"brown"}}>body &#123; <br /><span style={{color:"red"}}>background-color :</span></span><span style={{color:"blue"}}> lightblue;</span><br/>
<span style={{color:"brown"}}> &#x7D;</span><br/>

</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>
<h2>Other Elements</h2>
<p>You can set the background color for any HTML elements:</p>
<div class="h4-example" style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={ulstate}>
<span style={{color:"brown"}}>body &#123; <br /><span style={{color:"red"}}>background-color :</span></span><span style={{color:"blue"}}> lightblue;</span><br/>
<span style={{color:"brown"}}> &#x7D;</span><br/>
<span style={{color:"brown"}}>h1 &#123; <br /><span style={{color:"red"}}>color :</span></span><span style={{color:"blue"}}> white;</span><br/><span style={{color:"red"}}>text-align: </span><span style={{color:"blue"}}> center;</span><br />
<span style={{color:"brown"}}> &#x7D;</span><br/>
<span style={{color:"brown"}}>p &#123; <br /><span style={{color:"red"}}>font-family</span></span><span style={{color:"blue"}}> verdana;</span><br/><span style={{color:"brown"}}> &#x7D;</span><br/>
</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>
<h2>Opacity / Transparency</h2>
<p>The <code class="w3-codespan">opacity</code> property specifies the opacity/transparency of an element. It can take a value from 0.0 - 1.0. The lower value, the more transparent:</p>

<div class="w3-cell-row">
<div class="w3-cell w3-mobile w3-center">
<div style={{backgroundColor:"#4CAF50",opacity:"1",padding:"50px",color:"black"}}><p>opacity 1</p></div>
</div>

<div class="w3-cell w3-mobile w3-center">
<div style={{backgroundColor:"#4CAF50",opacity:"0.6",padding:"50px",color:"black"}}><p>opacity 0.6</p></div>
</div>

<div class="w3-cell w3-mobile w3-center">
<div style={{backgroundColor:"#4CAF50",opacity:"0.3",padding:"50px",color:"black"}}><p>opacity 0.3</p></div>
</div>

<div class="w3-cell w3-mobile w3-center">
<div style={{backgroundColor:"#4CAF50",opacity:"0.1",padding:"50px",color:"black"}}><p>opacity 0.1</p></div>
</div>

</div>
<div class="h4-example" style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={ulstate}>
<span style={{color:"brown"}}>div &#123; <br /><span style={{color:"red"}}>background-color :</span></span><span style={{color:"blue"}}> green;</span><br/>
<span style={{color:"red"}}>opacity :</span><span style={{color:"blue"}}> 0.3;</span><br />
<span style={{color:"brown"}}> &#x7D;</span><br/>

</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>

<h2>The CSS Background Color Property</h2>

<table class="ws-table-all notranslate">
  <tr>
    <th style={{width:"30%"}}>Property</th>
    <th>Description</th>
  </tr>
  <tr style={ulstate}>
    <td><a href="/cssref/pr_background-color.asp"  style={ulstate}>background-color</a></td>
    <td>Sets the background color of an element</td>
  </tr>
  </table>

<div className='fullwi'>
  <Footer/>
  </div>
    </div></div>
    </div>
  )
}

export default Css_backgrounds
