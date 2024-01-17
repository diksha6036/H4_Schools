import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Css_backgroundStyle.css';
const Css_fonts = () => {
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
        <h1>CSS <span class="color_h1">Fonts</span></h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
<hr/>
<p class="intro">Choosing the right font for your website is important!</p>
<hr/>
<div className='topg' style={green}>
<h2>Font Selection is Important</h2>
<p>Choosing the right font has a huge impact on how the readers experience a 
website.</p>
<p>The right font can create a strong identity for your brand.</p>
<p>Using a font that is easy to read is important. The font adds 
value to your text. It is also important to choose the correct color and text size 
for the font.</p>
<hr/></div>
<h2>Generic Font Families</h2>
<p>In CSS there are five generic font families:</p>
<ol>
  <li><strong>Serif</strong> fonts have a small stroke at the edges of each letter. They create a sense of formality and elegance.</li>
  <li><strong>Sans-serif</strong> fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.</li>
  <li><strong>Monospace</strong> fonts - here all the letters have the same fixed width. They create a mechanical look.&nbsp;</li>
  <li><strong>Cursive</strong> fonts imitate human handwriting.</li>
  <li><strong>Fantasy</strong> fonts are decorative/playful fonts.</li>
</ol>
<p>All the different font names belong to one of the generic font families.&nbsp;</p>
<hr></hr>
<h2>Difference Between Serif and Sans-serif Fonts</h2>
<img alt="Serif vs. Sans-serif" src="https://www.w3schools.com/css/serif.gif" width="398" height="142" style={{maxWidth:"100%",height:"auto"}}/>
<div class="w3-panel w3-note" style={yellow}>
 <p><strong>Note:</strong> On computer screens, sans-serif fonts are considered easier to read than serif fonts.</p>
</div>
<hr/>
<h2>Some Font Examples</h2>
<table class="ws-table-all notranslate">
<tr >
<th style={{width:"20%"}}>Generic Font Family</th>
<th style={{width:"30%"}}>Examples of Font Names</th>
</tr>
<tr style={ulstate}>
<td>Serif</td>
<td><span style={{fontSize:"150%",fontFamily:"'Times New Roman',serif"}}>Times New Roman</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Georgia',serif"}}>Georgia</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Garamond',serif"}}>Garamond</span><br/>
</td>
</tr>
<tr style={ulstate}>
<td>Sans-serif</td>
<td><span style={{fontSize:"150%",fontFamily:"'Arial',serif"}}>Arial</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Verdana',serif"}}>Verdana</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Helvetica',serif"}}>Helvetica</span><br/>
</td>
</tr >
<tr style={ulstate}>
<td>Monospace</td>
<td><span style={{fontSize:"150%",fontFamily:"'Courier New',monospace"}}>Courier New</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Lucida',monospace"}}>Lucida Console</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Monoca',monospace"}}>Monaco</span>
</td>
</tr >
<tr style={ulstate}>
<td>Cursive</td>
<td><span style={{fontSize:"150%",fontFamily:"'Brush Script MT',cursive"}}>Brush Script MT</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Lucida Handwriting',cursive"}}>Lucida Handwriting</span><br/>
</td>
</tr>
<tr style={ulstate}>
<td>Fantasy</td>
<td><span style={{fontSize:"150%",fontFamily:"'Copperplate',fantasy"}}>Copperplate</span><br/>
<span style={{fontSize:"150%",fontFamily:"'Papyrus',fantasy"}}>Papyrus</span>
</td>
</tr>
</table>
<hr/>
<h2>The CSS font-family Property</h2>
<p>In CSS, we use the <code class="w3-codespan">font-family</code> property to specify the font of a text.</p>

<div class="w3-note w3-panel" style={yellow}>
<p><b>Note</b>: If the font name is more than one word, it must be in quotation marks, like: &quot;Times New Roman&quot;.</p>
</div><p><strong>Tip:</strong> The <code class="w3-codespan">font-family</code> property should hold several font names as a &quot;fallback&quot; system, 
to ensure maximum compatibility between browsers/operating systems. Start with the font you want, and end with a generic family 
(to let the 
browser pick a similar font in the generic family, if no other fonts are 
available). The font names should be separated with comma. Read more about 
fallback fonts in the <a href="css_font_websafe.asp" style={{color:"black"}}>next chapter</a>.</p>
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

<div className='fullwi'>
  <Footer/>
  </div>
            </div></div>
    </div>
  )
}

export default Css_fonts
