import React,{useState,useRef} from 'react'
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
const Html_editor = () => {
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
        <h1>HTML <span class="color_h1">Editors</span></h1>
        <div className='btns'>
     

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}

        </div>
        <hr/>
<p class="intro">A simple text editor is all you need to learn HTML.</p>
<hr></hr>
<div className='topg' style={green}>
<h2>Learn HTML Using Notepad or TextEdit</h2>
<p>Web pages can be created and modified by using professional HTML editors.</p>
<p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
<p>We believe that using a simple text editor is a good way to learn HTML.</p>
<p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>
<hr></hr></div>
<h2>Step 1: Open Notepad (PC)</h2>
<p><strong>Windows 8 or later:</strong></p>
<p>Open the <strong>Start Screen</strong> (the window symbol at the bottom left on your screen). Type <strong>Notepad</strong>.</p>
<p><strong>Windows 7 or earlier:</strong></p>
<p>Open <strong>Start</strong> &gt;<strong> 
Programs &gt;</strong> <strong>Accessories &gt;</strong> <strong>Notepad</strong></p>
<hr></hr>
<h2>Step 2: Write Some HTML</h2>
<p>Write or copy the following HTML code into Notepad:</p>
<div class="h4-example"  style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh"  style={ulstate}>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>!DOCTYPE <span style={{color:"red"}}>html</span></span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>html</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>body</span><span style={{color:"blue"}}>&gt;</span><br/><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>h1</span><span style={{color:"blue"}}>&gt;</span>This is a Heading<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/h1</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>p</span><span style={{color:"blue"}}>&gt;</span>This is a paragraph.<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/p</span><span style={{color:"blue"}}>&gt;</span><br/><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/body</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/html</span><span style={{color:"blue"}}>&gt;</span>
</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>

<h2>Step 3: Save the HTML Page</h2>
<p>Save the file on your computer. Select <strong>File &gt; Save as</strong> in the Notepad menu.</p>
<p>Name the file <strong>&quot;index.htm&quot;</strong> and set the encoding to 
<strong>UTF-8</strong> (which is the preferred encoding for HTML files).</p>
<p><img alt="View in Browser" style={{height:"auto",width:"631px"} } class="w3-image" src="https://www.w3schools.com/html/img_saveas.png"/></p>
<div class="w3-panel w3-note" style={yellow}>
  <p><strong>Tip:</strong> You can use either .htm or .html as file extension. There is no difference; it is up to you.</p>
</div>
<hr></hr>

<div className='fullwi'>
  <Footer/>
  </div>
        </div>
        </div>
    </div>
  )
}

export default Html_editor
