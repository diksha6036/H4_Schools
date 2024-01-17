import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
import './Html_headStyle.css';

const Html_head = () => {
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
        <h1>HTML - <span class="color_h1">The Head Element</span></h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
<hr/>
<p class="intro">The HTML <code class="w3-codespan">&lt;head&gt;</code> element
is a container for the following elements:
<code class="w3-codespan">&lt;title&gt;</code>, <code class="w3-codespan">&lt;style&gt;</code>, 
<code class="w3-codespan">&lt;meta&gt;</code>, <code class="w3-codespan">&lt;link&gt;</code>, <code class="w3-codespan">&lt;script&gt;</code>, and <code class="w3-codespan">&lt;base&gt;</code>.</p>
<hr></hr>
<h2>The HTML &lt;head&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;head&gt;</code> element is a container for metadata (data 
about data) and is placed between the <code class="w3-codespan">&lt;html&gt;</code> tag and the <code class="w3-codespan">&lt;body&gt;</code> tag.</p>
<p>HTML metadata is data about the HTML document. Metadata is not displayed.</p>
<p>Metadata typically define the document title, character set, styles, scripts, and other meta information.</p>
<hr></hr>
<div className='topg ' style={green}>
<h2>The HTML &lt;title&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;title&gt;</code> element defines the title of the document. 
The title must be text-only, and it is shown in the browser's title bar or in 
the page's tab.</p>
<p>The <code class="w3-codespan">&lt;title&gt;</code> element is required in HTML documents!</p>
<p>The content of a page title is very important for search engine optimization 
(SEO)! The page title is used by search engine algorithms to decide the order 
when listing pages in search results.</p>
<p>The <code class="w3-codespan">&lt;title&gt;</code> element:</p>
<ul className='introul'>
  <li>defines a title in the browser toolbar</li>
  <li>provides a title for the page when it is added to favorites</li>
  <li>displays a title for the page in search engine-results</li>
</ul>

<p>So, try to make the title as accurate and meaningful as possible!</p>

<p>A simple HTML document:</p></div>
<div class="h4-example"style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={ulstate}>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>!DOCTYPE <span style={{color:"red"}}>html</span></span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>html</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>title</span><span style={{color:"blue"}}>&gt;</span>A Meaningful Page Title<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/title</span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/head</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>body</span><span style={{color:"blue"}}>&gt;</span><br/><br/>The content of the document......<br/><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/body</span><span style={{color:"blue"}}>&gt;</span><br/><span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/html</span><span style={{color:"blue"}}>&gt;</span>
</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div>
</div>
<h2>The HTML &lt;style&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;style&gt;</code> element is used to define style information for a 
single HTML page:</p>
<hr/>
<h2>The HTML &lt;link&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;link&gt;</code> element defines the 
relationship between the current document and an external resource.<br/><br/>The <code class="w3-codespan">&lt;link&gt;</code> 
tag is most often used to link to external style sheets:</p><hr />
<h2>The HTML &lt;meta&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;meta&gt;</code> element is typically used 
to specify the character set, page description, keywords, author of the document, 
and viewport settings.</p>
<p>The metadata will not be displayed on the page, but is used by browsers (how to display content 
or reload page), 
by search engines (keywords), and other web services.</p>
<h2>Examples</h2>
<p><b>Define the character set used:</b></p>
<div class="w3-code w3-border notranslate htmlHigh" style={ulstate}>
<div >&lt;meta charset=&quot;UTF-8&quot;&gt;</div>
</div>

<p><b>Define keywords for search engines:</b></p>
<div class="w3-code w3-border notranslate htmlHigh" style={ulstate}>
<div>&lt;meta name=&quot;keywords&quot; content=&quot;HTML, CSS, JavaScript&quot;&gt;</div>
</div>

<p><b>Define a description of your web page:</b></p>
<div class="w3-code w3-border notranslate htmlHigh" style={ulstate}>
<div>&lt;meta name=&quot;description&quot; content=&quot;Free Web tutorials&quot;&gt;</div>
</div>

<p><b>Define the author of a page:</b></p>
<div class="w3-code w3-border notranslate htmlHigh" style={ulstate}>
<div>&lt;meta name=&quot;author&quot; content=&quot;John Doe&quot;&gt;</div>
</div>

<p><b>Refresh document every 30 seconds:</b></p>
<div class="w3-code w3-border notranslate htmlHigh" style={ulstate}>
<div>&lt;meta http-equiv=&quot;refresh&quot; content=&quot;30&quot;&gt;</div>
</div>

<p><b>Setting the viewport to make your website look good on all devices:</b></p>
<div class="w3-code w3-border notranslate htmlHigh" style={ulstate}>
<div>
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
</div>
</div>
<h2>Setting The Viewport</h2>

<p>The viewport is the user's visible area of a web page. It varies with the device 
- it will be smaller on a mobile phone than on a computer screen.</p>
<p>You should include the following <code class="w3-codespan">&lt;meta&gt;</code> element in all your web pages:</p>
<div class="w3-code w3-border notranslate htmlHigh" style={ulstate}>
  <div>
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
</div>
</div>
<p>This gives the browser instructions on how 
to control the page's dimensions and scaling.</p>
<p>The <code class="w3-codespan">width=device-width</code> part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).</p>
<p>The <code class="w3-codespan">initial-scale=1.0</code> part sets the initial zoom level when the page is first loaded by the browser.</p>
<hr/>

<h2>The HTML &lt;script&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;script&gt;</code> element is used to define client-side JavaScripts.</p>
<p>The following JavaScript writes &quot;Hello JavaScript!&quot; into an HTML element with id=&quot;demo&quot;:</p>
<hr/>

<h2>The HTML &lt;base&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;base&gt;</code> element specifies the base URL and/or target for all relative URLs in a page.</p>
<p>The <code class="w3-codespan">&lt;base&gt;</code> tag must have either an 
href or a target attribute present, or both.</p>
<p>There can only be one single <code class="w3-codespan">&lt;base&gt;</code> 
element in a document!</p>
<div style={yellow}>
<h2 style={yellow}>Chapter Summary</h2>
<ul className='introul' style={yellow}>
<li>The <code class="w3-codespan">&lt;head&gt;</code> element is a container for metadata (data 
about data)</li>
  <li>The <code class="w3-codespan">&lt;head&gt;</code> element is placed between the <code class="w3-codespan">&lt;html&gt;</code> tag and the <code class="w3-codespan">&lt;body&gt;</code> tag</li>
  <li>The <code class="w3-codespan">&lt;title&gt;</code> element is required and 
  it defines the title of the document</li>
  <li>The <code class="w3-codespan">&lt;style&gt;</code> element is used to 
  define style information for a single document</li>
  <li>The <code class="w3-codespan">&lt;link&gt;</code> 
  tag is most often used to link to external style sheets</li>
  <li>The <code class="w3-codespan">&lt;meta&gt;</code> element is typically 
  used to specify the character set, page description, keywords, author of the 
  document, and viewport settings</li>
  <li>The <code class="w3-codespan">&lt;script&gt;</code> element is used to define client-side JavaScripts</li>
  <li>The <code class="w3-codespan">&lt;base&gt;</code> element specifies the 
  base URL and/or target for all relative URLs in a page</li>
</ul>
<hr></hr></div>
<h2>HTML head Elements</h2>
<table class="ws-table-all notranslate">
<tr>
<th style={{width:"20%"}}>Tag</th>
<th>Description</th>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_head.asp" style={ulstate}>&lt;head&gt;</a></td>
<td> Defines information about the document</td>
</tr>
<tr style={ulstate}>
<td><a style={ulstate} href="/tags/tag_title.asp" >&lt;title&gt;</a></td>
<td>Defines the title of a document</td>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_base.asp" style={ulstate}>&lt;base&gt;</a></td>
<td>Defines a default address or a default target for all links on a page</td>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_link.asp" style={ulstate}>&lt;link&gt;</a></td>
<td>Defines the relationship between a document and an external resource</td>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_meta.asp" style={ulstate}>&lt;meta&gt;</a></td>
<td>Defines metadata about an HTML document</td>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_script.asp" style={ulstate}>&lt;script&gt;</a></td>
<td>Defines a client-side script</td>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_style.asp" style={ulstate}>&lt;style&gt;</a></td>
<td>Defines style information for a document</td>
</tr>
</table>
<div className='fullwi'>
  <Footer/>
  </div>
            </div>
            </div>
    </div>
  )
}

export default Html_head
