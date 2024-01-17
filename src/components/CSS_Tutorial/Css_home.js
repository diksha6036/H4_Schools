import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';

const Css_home = () => {
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

<h1>CSS <span class="color_h1">Tutorial</span></h1>
<div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
<div class="w3-panel w3-info intro topg" style={green}>
<p>CSS is the language we use to style an HTML document.</p>
<p>CSS describes how HTML elements should be displayed.</p>
<p>This tutorial will teach you CSS from basic to advanced.</p>
</div>
<hr></hr>
<h2>Examples in Each Chapter</h2>
<p>This CSS tutorial contains hundreds of CSS examples.</p>
<p>With our online editor, you can edit the CSS, and click on a button to view the result.</p>
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
<p><strong>Click on the &quot;Try it Yourself&quot; button to see how it works.</strong></p>
<hr></hr> 
<h2>Use the Menu</h2>
<p>We recommend reading this tutorial, in the sequence listed in the menu.</p>
<p>If you have a large screen, the menu will always be present on the left.</p>
<p>If you have a small screen, open the menu by clicking the top menu sign <span class="w3-xlarge">&#9776;</span>.</p>
<hr></hr><h2>CSS Templates</h2>
<p>We have created some responsive HD.CSS templates for you to use.</p>
<p>You are free to modify, save, share, and use them in all your projects.</p>
<div className='fullwi'>
  <Footer/>
  </div>
 </div></div></div>
  )
}

export default Css_home
