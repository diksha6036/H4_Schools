import React,{useState,useRef} from 'react'
import './Html_introStyle.css';
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Html_Intro = () => {
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
        <h1>HTML <span class="color_h1">Introduction</span></h1>
        <div className='btns'>
     

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}

        </div>
        <hr/>
        <p class="intro">HTML is the standard markup language for creating Web pages.</p>
<hr></hr>
<h2>What is HTML?</h2>
<ul className='introul' style={ulstate}>
<li>HTML stands for Hyper Text Markup Language</li>
  <li>HTML is the standard markup language for creating Web pages</li>
  <li>HTML describes the structure of a Web page</li>
  <li>HTML consists of a series of elements</li>
  <li>HTML elements tell the browser how to display the content</li>
  <li>HTML elements label pieces of content such as &quot;this is a heading&quot;, &quot;this 
  is a paragraph&quot;, &quot;this is a link&quot;, etc.</li>
</ul>
<hr></hr>
<h2>A Simple HTML Document</h2>
<div class="h4-example" style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={ulstate}>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>!DOCTYPE <span style={{color:"red"}}>html</span></span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>html</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>title</span><span style={{color:"blue"}}>&gt;</span>Page Title<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/title</span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>body</span><span style={{color:"blue"}}>&gt;</span><br/><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>h1</span><span style={{color:"blue"}}>&gt;</span>This is a Heading<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/h1</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>p</span><span style={{color:"blue"}}>&gt;</span>This is a paragraph.<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/p</span><span style={{color:"blue"}}>&gt;</span><br/><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/body</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/html</span><span style={{color:"blue"}}>&gt;</span>
</div> <div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>
<p><strong>Click on the &quot;Try it Yourself&quot; button to see how it works.</strong></p>
<hr></hr>
<div className='topg' style={green}>
<h3 >Example Explained</h3>
<ul className='introul'>
<li>The <code class="w3-codespan">&lt;!DOCTYPE html&gt;</code> declaration defines 
that this document is an HTML5 document</li>
<li>The <code class="w3-codespan">&lt;html&gt;</code> element is the root element of an HTML 
page</li>
 <li>The <code class="w3-codespan">&lt;head&gt;</code> element contains meta information about the 
 HTML page</li>
 <li>The <code class="w3-codespan">&lt;title&gt;</code> element specifies a title for the 
 HTML page (which is shown in the browser's title bar or in the page's tab)</li>
 <li>The <code class="w3-codespan">&lt;body&gt;</code> element defines the 
 document's body, and is a container for all the visible contents, such as 
 headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
 <li>The <code class="w3-codespan">&lt;h1&gt;</code> element defines a large heading</li>
 <li>The <code class="w3-codespan">&lt;p&gt;</code> element defines a paragraph</li>
</ul>
<hr></hr></div>
<h2>What is an HTML Element?</h2>
<p>An HTML element is defined by a start tag, some content, and an end tag:</p>
<div style={{fontSize:"20px",padding:"10px",marginBottom:"10px"}}>
<span class="spes_tagname">
<span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>tagname</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
Content goes here...
<span class="spes_tagname">
<span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>/tagname</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
</div>
<p>The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>

<div style={{fontSize:"20px",padding:"10px",marginBottom:"10px"}}>
<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span><span class="spes_tagname"><span style={{color:"brown"}}>h1</span></span><span style={{color:"blue"}}><span style={{color:"blue"}}>&gt;</span></span></span></span>My 
  First Heading<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>/h1</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
</div>
<div style={{fontSize:"20px",padding:"10px",marginBottom:"10px"}}>
<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>p</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>My first paragraph.<span class="spes_tagname"><span class="spes_tag"><span style={{color:"blue"}}>&lt;</span></span><span style={{color:"brown"}}>/p</span><span class="spes_tag"><span style={{color:"blue"}}>&gt;</span></span></span>
</div>
<table class="ws-table-all notranslate">
<tr>
<th>Start tag</th>
<th>Element content</th>
<th>End tag</th>
</tr>
<tr style={ulstate}>
<td>&lt;h1&gt;</td>
<td>My First Heading</td>
<td>&lt;/h1&gt;</td>
</tr>
<tr style={ulstate}>
<td>&lt;p&gt;</td>
<td>My first paragraph.</td>
<td>&lt;/p&gt;</td>
</tr>
<tr style={ulstate}>
<td>&lt;br&gt;</td>
<td><em>none</em></td>
<td><em>none</em></td>
</tr>
</table>
<div class="w3-panel w3-note" style={yellow}>
<p><strong>Note:</strong> Some HTML elements have no content (like the &lt;br&gt; 
element). These elements are called empty elements. Empty elements do not have an end tag!</p>
</div>
<hr></hr>
<h2>HTML Page Structure</h2>
<p>Below is a visualization of an HTML page structure:</p>

<div  class="ws-grey" style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}} >&lt;html&gt;
<div style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>&lt;head&gt;
<div style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>&lt;title&gt;Page title&lt;/title&gt;
</div>
&lt;/head&gt;
</div>
<div class="ws-grey" style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>&lt;body&gt;
<div class="w3-white" style={{width:"90%",border:"1px solid grey",padding:"3px",margin:"20px"}}>
<div style={{width:"90%",border:"1px solid grey",padding:"5px",margin:"20px"}}>&lt;h1&gt;This is a heading&lt;/h1&gt;</div>
<div style={{width:"90%",border:"1px solid grey",padding:"5px",margin:"20px"}}>&lt;p&gt;This is a paragraph.&lt;/p&gt;</div>
<div style={{width:"90%",border:"1px solid grey",padding:"5px",margin:"20px"}}>&lt;p&gt;This is another paragraph.&lt;/p&gt;</div>
</div>
&lt;/body&gt;
</div>
&lt;/html&gt;
</div>

<div class="w3-panel w3-note" style={yellow}>
<p><strong>Note:</strong> The content inside the &lt;body&gt; section 
will be displayed in a browser. The content inside the &lt;title&gt; element will be 
shown in the browser's title bar or in the page's tab.</p>
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

export default Html_Intro;
