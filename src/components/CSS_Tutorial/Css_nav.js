import React,{useState,useRef} from "react";
import Navbar2 from "../Navbar2";
import { Button } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Footer from "../Footer";
import "./Css_backgroundStyle.css";
import "./Css_navStyle.css";
const Css_nav = () => {
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
          <h1>
            CSS <span class="color_h1">Navigation Bar</span>
          </h1>
          <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
          <hr />
          <h2>Demo: Navigation Bars</h2>

          <div class="w3-row">
            <div class="w3-col m4">
              <p>Vertical</p>
              <ul class="vertical ex introul">
                <li>
                  <a class="active" href="javascript:void(0)" style={{backgroundColor:'	#0f4162'}}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">News</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="w3-col m8">
            <p>Horizontal</p>

            <ul class="horizontal introul">
              <li>
                <a class="active" href="javascript:void(0)" style={{backgroundColor:'	#0f4162'}}>
                  Home
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">News</a>
              </li>
              <li>
                <a href="javascript:void(0)">Contact</a>
              </li>
              <li class="rightli" style={{ float: "right" }}>
                <a href="javascript:void(0)">About</a>
              </li>
            </ul>
            <br />
            <ul class="horizontal gray introul">
              <li>
                <a href="javascript:void(0)">Home</a>
              </li>
              <li>
                <a href="javascript:void(0)">News</a>
              </li>
              <li>
                <a class="active" href="javascript:void(0)">
                  Contact
                </a>
              </li>
              <li class="rightli" style={{ float: "right" }}>
                <a href="javascript:void(0)">About</a>
              </li>
            </ul>
          </div>
       
        <hr />

        <h2>Navigation Bars</h2>
        <p>Having easy-to-use navigation is important for any web site.</p>
        <p>
          With CSS you can transform boring HTML menus into good-looking
          navigation bars.
        </p>
        <hr />

        <h2>Navigation Bar = List of Links</h2>
        <p>A navigation bar needs standard HTML as a base.</p>
        <p>
          In our examples we will build the navigation bar from a standard HTML
          list.
        </p>
        <p>
          A navigation bar is basically a list of links, so using the &lt;ul&gt;
          and &lt;li&gt; elements makes perfect sense:
        </p>
        <div class="h4-example" style={green}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={green}>
<span style={{color:"brown"}}>body &#123; <br /><span style={{color:"red"}}>background-color :</span></span><span style={{color:"blue"}}> lightblue;</span><br/>
<span style={{color:"brown"}}> &#x7D;</span><br/>
<span style={{color:"brown"}}>h1 &#123; <br /><span style={{color:"red"}}>color :</span></span><span style={{color:"blue"}}> white;</span><br/><span style={{color:"red"}}>text-align: </span><span style={{color:"blue"}}> center;</span><br />
<span style={{color:"brown"}}> &#x7D;</span><br/>
<span style={{color:"brown"}}>p &#123; <br /><span style={{color:"red"}}>font-family</span></span><span style={{color:"blue"}}> verdana;</span><br/><span style={{color:"brown"}}> &#x7D;</span><br/>
</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>
<p>Example explained:</p>
<ul className="introul">
<li><code class="w3-codespan">list-style-type: none;</code> - Removes the bullets. A navigation bar 
does not need list markers</li>
<li>Set <code class="w3-codespan">margin: 0;</code> and <code class="w3-codespan">padding: 0;</code> 
to remove browser default settings</li>
</ul>
<p>The code in the example above is the standard code used in both vertical, and horizontal navigation bars, which you will learn more about in the next chapters.</p><div className='btns'>

</div>
<div className='fullwi'>
  <Footer/>
  </div>

      </div>
    </div>
    </div>
  );
};

export default Css_nav;
