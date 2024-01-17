import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Html_colorStyle.css';
const Html_colors = () => {
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
         <h3 className='heading'>HTML Tutorial</h3>
            <div className="newd"><ul className='ul1'>
        <li className="rcolor"><a target="_top" href="/htmlhome" style={fd}>HTML Home</a></li>
   <li className="rcolor"><a target="_top" href="/htmlIntro" style={fd}>HTML Introduction</a></li>
    <li className="rcolor"><a target="_top" href="/htmlEditor" style={fd}>HTML Editors</a></li>
   <li className="rcolor"><a target="_top" href="/htmlIntro" style={fd}>HTML Basic</a></li>
   <li className="rcolor"><a target="_top" href="/htmlInline" style={fd}>HTML Elements</a></li>
   <li className="rcolor"><a target="_top" href="/htmlHead" style={fd}>HTML Attributes</a></li>
   <li className="rcolor"><a target="_top" href="/htmlEditor" style={fd}>HTML Headings</a></li>
   <li className="rcolor"><a target="_top" href="/htmlhome" style={fd}>HTML Paragraphs</a></li>
   <li className="rcolor"><a target="_top" href="htmlInline" style={fd}>HTML Styles</a></li>
   <li className="rcolor"><a target="_top" href="/htmlColor" style={fd}>HTML Formatting</a></li>
    <li className="rcolor"><a target="_top" href="/htmlEditor" style={fd}>HTML Quotations</a></li>
    <li className="rcolor"><a target="_top" href="/htmlhome"style={fd}>HTML Comments</a></li>
<li className="rcolor"><a target="_top" href="/htmlColor" style={fd}>HTML Colors</a></li>
<li className="rcolor"><a target="_top" href="htmlInline" style={fd}>HTML CSS</a></li>
<li className="rcolor"><a target="_top" href="/htmlhome" style={fd}>HTML Links</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/htmlColor" style={fd}>Links</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro" style={fd}>Link Colors</a></li>
  <li className="rcolor"><a target="_top" href="/htmlEditor"style={fd}>Link Bookmarks</a></li>
</div>
<li className="rcolor"><a target="_top" href="/htmlHead"style={fd}>HTML Images</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/htmlhome"style={fd}>Images</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro"style={fd}>Image Map</a></li>
  <li className="rcolor"><a target="_top" href="/htmlEditor"style={fd}>Background Images</a></li>
  <li className="rcolor"><a target="_top" href="/htmlColor"style={fd}>The Picture Element</a></li>
</div>
<li className="rcolor"><a target="_top" href="/htmlhome"style={fd}>HTML Favicon</a></li>
<li className="rcolor"><a target="_top" href="/htmlIntro"style={fd}>HTML Page Title</a></li>
<li className="rcolor"><a target="_top" href="/htmlHead"style={fd}>HTML Tables</a></li>
<div class="tut_overview">
  <li className="rcolor"><a target="_top" href="/htmlhome"style={fd}>HTML Tables</a></li>
  <li className="rcolor"><a target="_top" href="/htmlHead"style={fd}>Table Borders</a></li>
  <li className="rcolor"><a target="_top" href="/htmlEditor"style={fd}>Table Sizes</a></li>
  <li className="rcolor"><a target="_top" href="/htmlColor"style={fd}>Table Headers</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro"style={fd}>Padding &amp; Spacing</a></li>
  <li className="rcolor"><a target="_top" href="/htmlhome"style={fd}>Colspan &amp; Rowspan</a></li>
  <li className="rcolor"><a target="_top" href="/htmlIntro"style={fd}>Table Styling</a></li>
  <li className="rcolor"><a target="_top" href="/htmlColor"style={fd}>Table Colgroup</a></li>
</div>



<li className="rcolor"><a target="_top" href="/htmlIntro"style={fd}>HTML Lists</a></li>
<div class="tut_overview">
<li className="rcolor"><a target="_top" href="/htmlhome"style={fd}>Lists</a></li>
<li className="rcolor"><a target="_top" href="/htmlEditor"style={fd}>Unordered Lists</a></li>
<li className="rcolor"><a target="_top" href="/htmlHead"style={fd}>Ordered Lists</a></li>
<li className="rcolor"><a target="_top" href="/htmlIntro"style={fd}>Other Lists</a></li>
</div>
<li className="rcolor"><a target="_top" href="htmlInline"style={fd}>HTML Block &amp; Inline</a></li>
<li className="rcolor"><a target="_top" href="/htmlEditor"style={fd}>HTML Classes</a></li>
<li className="rcolor"><a target="_top" href="/htmlhome"style={fd}>HTML Id</a></li>
<li className="rcolor"><a target="_top" href="/htmlIntro"style={fd}>HTML Iframes</a></li>
<li className="rcolor"><a target="_top" href="/htmlColor"style={fd}>HTML JavaScript</a></li>
<li className="rcolor"><a target="_top" href="/htmlEditor"style={fd}>HTML File Paths</a></li>
<li className="rcolor"><a target="_top" href="/htmlHead"style={fd}>HTML Head</a></li></ul></div></div>
        <div class="grid-item" id='hihi' ref={divRef}><br />
        <h1>HTML <span class="color_h1">Colors</span></h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
<hr/>
<p class="intro">HTML colors are specified with predefined color names, or with 
RGB, HEX, HSL, RGBA, or HSLA values.</p>
<hr></hr>
<h2>Color Names</h2>
<p>In HTML, a color can be specified by using a color name:</p>
<div class="w3-row w3-center" style={{margin:"0 -16px",lineHeight:"80px",color:"white"}}>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"tomato"}}>Tomato</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"orange"}}>Orange</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"dodgerblue"}}>DodgerBlue</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"mediumseagreen"}}>MediumSeaGreen</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"gray"}}>Gray</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"slateblue"}}>SlateBlue</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"violet"}}>Violet</div>
  </div>
  <div class="w3-col l3 m6 w3-padding">
    <div style={{backgroundColor:"lightgray",color:"#444444"}}>LightGray</div>
  </div>
</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div><hr />
<h2>Background Color</h2>
<p>You can set the background color for HTML elements:</p>
<div style={{backgroundColor:"dodgerblue", textAlign:"center",color:"white",fontSize:"24px"}}>Hello World</div>
<br/>
<div class="w3-container" style={{backgroundColor:"tomato",color:"white"}}><br/>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br/><br/>
</div>
<hr/>
<h2>Text Color</h2>
<p>You can set the color of text:</p>
<h3 style={{color:"tomato"}}>Hello World</h3>
<p style={{color:"dodgerblue"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
<p style={{color:"mediumseagreen"}}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
<hr/>
<h2>Border Color</h2>
<p>You can set the color of borders:</p>
<h2 style={{border: "2px solid Tomato"}}>Hello World</h2>
<h2 style={{border: "2px solid DodgerBlue"}}>Hello World</h2>
<h2 style={{border:"2px solid Violet"}}>Hello World</h2>
<hr/>
<h2>Color Values</h2>
<p>In HTML, colors can also be specified using RGB values, HEX values, HSL 
values, RGBA values, and HSLA values.</p>
<p>The following three &lt;div&gt; elements have their background color set with RGB, 
HEX, and HSL values:</p>

<div class="w3-center" style={{lineHeight:"60px",color:"white",fontSize:"20px",fontWeight:"bold",fontFamily:"Consolas, 'Courier New', Courier, monospace"}}>
  <div style={{backgroundColor:"rgb(255, 99, 71)",margin:"10px 0"}}>rgb(255, 99, 71)</div>
  <div style={{backgroundColor:"#ff6347",margin:"10px 0"}}>#ff6347</div>
  <div style={{backgroundColor:"hsl(9, 100%, 64%)",margin:"10px 0"}}>hsl(9, 100%, 64%)</div>
</div>
<p>The following two &lt;div&gt; elements have their background color set with RGBA 
and HSLA values, which add an Alpha channel to the color (here we have 50% 
transparency):</p>
<div class="w3-center" style={{lineHeight:"60px",color:"white",fontSize:"20px",fontWeight:"bold",fontFamily:"Consolas, 'Courier New', Courier, monospace"}}>
  <div style={{backgroundColor:"rgba(255, 99, 71, 0.5)",margin:"10px 0"}}>rgba(255, 99, 71, 0.5)</div>
  <div style={{backgroundColor:"hsla(9, 100%, 64%, 0.5)",margin:"10px 0"}}>hsla(9, 100%, 64%, 0.5)</div>
</div>
<div class="w3-note w3-panel" style={yellow}>
<h3>Learn more about Color Values</h3>
<p>You will learn more about <a href="html_colors_rgb.asp">RGB</a>, <a href="html_colors_hex.asp">HEX</a> and <a href="html_colors_hsl.asp">HSL</a> in the next chapters.</p>
</div>
<div className='fullwi'>
  <Footer/>
  </div>
</div>
        </div>
        </div>

  )
}

export default Html_colors
