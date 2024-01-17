import React,{useState,useRef} from 'react'
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Navbar2 from '../Navbar2';
import Footer from '../Footer';
import './Html_blockStyle.css';
const Html_blockInline = () => {
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
        <h1>HTML <span class="color_h1">Block and Inline Elements</span></h1>
        <div className='btns'>
     

     <Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
             {/* <Button variant="success">❮ Home</Button>{' '}  */}
             <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
             {/* <Button variant="success">Next ❯</Button>{' '} */}
     
             </div>
<hr/>
<p class="intro">Every HTML element has a default display value, depending on what type 
of element it is.</p>
<p class="intro">There are two display values: block and inline.</p>
<hr></hr>
<div style={yellow}>
<h2>Block-level Elements</h2>
<p>A block-level element always starts on a new line, and the browsers 
automatically add some space (a margin) before and after the element.</p>
<p>A block-level element always takes up the full width available 
(stretches out to the left and right as far as it can).</p>
<p>Two commonly used block elements are: <code class="w3-codespan">&lt;p&gt;</code> 
and <code class="w3-codespan">&lt;div&gt;</code>.</p>
<p>The <code class="w3-codespan">&lt;p&gt;</code> element defines a paragraph in an 
HTML document.</p>
<p>The <code class="w3-codespan">&lt;div&gt;</code> element defines a division 
or a section in an HTML document.</p></div>
<p class="w3-theme-border" style={{borderWidth:"1px",borderStyle:"solid",padding:"5px"}}>
The &lt;p&gt; element is a block-level element.</p>

<div class="w3-theme-border" style={{borderWidth:"1px",borderStyle:"solid",padding:"5px"}}>
The &lt;div&gt; element is a block-level element.
</div>
<div class="h4-example" style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={ulstate}>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>p</span><span style={{color:"blue"}}>&gt;</span>Hello World<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/p</span><span style={{color:"blue"}}>&gt;</span><br/>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>div</span><span style={{color:"blue"}}>&gt;</span>Hello World<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/div</span><span style={{color:"blue"}}>&gt;</span><br/>

</div>
<div className='trybtn'> <Button variant="success" style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div></div>
<p>Here are the block-level elements in HTML:</p>
<div class="w3-row htmlHigh w3-code" style={{lineHeight:"25px",borderLeft:"none"}} style={ulstate}>
  <div class="mylist"><a href="/tags/tag_address.asp">&lt;address&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_article.asp">&lt;article&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_aside.asp">&lt;aside&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_blockquote.asp">&lt;blockquote&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_canvas.asp">&lt;canvas&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dd.asp">&lt;dd&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_div.asp">&lt;div&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dl.asp">&lt;dl&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dt.asp">&lt;dt&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_fieldset.asp">&lt;fieldset&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_figcaption.asp">&lt;figcaption&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_figure.asp">&lt;figure&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_footer.asp">&lt;footer&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_form.asp">&lt;form&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_hn.asp">&lt;h1&gt;-&lt;h6&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_header.asp">&lt;header&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_hr.asp">&lt;hr&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_li.asp">&lt;li&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_main.asp">&lt;main&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_nav.asp">&lt;nav&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_noscript.asp">&lt;noscript&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_ol.asp">&lt;ol&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_p.asp">&lt;p&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_pre.asp">&lt;pre&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_section.asp">&lt;section&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_table.asp">&lt;table&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_tfoot.asp">&lt;tfoot&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_ul.asp">&lt;ul&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_video.asp">&lt;video&gt;</a></div>
</div>
<hr></hr><br /><br /><br /><br />
<div className='topg' style={green}>
<h2>Inline Elements</h2>
<p>An inline element does not start on a new line.</p>
<p>An inline element only takes up as much width as necessary.</p></div>
<p>This is <span class="w3-theme-border" style={{border:"1px solid #1c1c84 ",padding:"5px"}}>a &lt;span&gt; element 
inside</span> a paragraph.</p><div class="h4-example" style={ulstate}>
<h3>Example</h3>
<div class="h4-code notranslate htmlHigh" style={ulstate}>
<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>span</span><span style={{color:"blue"}}>&gt;</span>Hello World<span style={{color:"blue"}}>&lt;</span><span style={{color:"brown"}}>/span</span><span style={{color:"blue"}}>&gt;</span><br/>

</div> 
<div className='trybtn'> <Button variant="success"  style={{backgroundColor:"	#000042",borderColor:"	#000042"}}><a href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default" className='restyle' target="_blank">Try it Yourself&raquo;</a></Button>{' '}</div></div>
<p >Here are the inline elements in HTML:</p>
<div class="w3-row htmlHigh w3-code" style={{lineHeight:"25px",borderLeft:"none"} } style={ulstate}>
  <div class="mylist"><a href="/tags/tag_a.asp">&lt;a&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_abbr.asp">&lt;abbr&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_acronym.asp">&lt;acronym&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_b.asp">&lt;b&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_bdo.asp">&lt;bdo&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_big.asp">&lt;big&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_br.asp">&lt;br&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_button.asp">&lt;button&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_cite.asp">&lt;cite&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_code.asp">&lt;code&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_dfn.asp">&lt;dfn&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_em.asp">&lt;em&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_i.asp">&lt;i&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_img.asp">&lt;img&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_input.asp">&lt;input&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_kbd.asp">&lt;kbd&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_label.asp">&lt;label&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_map.asp">&lt;map&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_object.asp">&lt;object&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_output.asp">&lt;output&gt;</a></div>  
  <div class="mylist"><a href="/tags/tag_q.asp">&lt;q&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_samp.asp">&lt;samp&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_script.asp">&lt;script&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_select.asp">&lt;select&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_small.asp">&lt;small&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_span.asp">&lt;span&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_strong.asp">&lt;strong&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_sub.asp">&lt;sub&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_sup.asp">&lt;sup&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_textarea.asp">&lt;textarea&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_time.asp">&lt;time&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_tt.asp">&lt;tt&gt;</a></div>
  <div class="mylist"><a href="/tags/tag_var.asp">&lt;var&gt;</a></div>
</div>   <br /><br /><br /><br /><br /><hr />
<h2>The &lt;div&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;div&gt;</code> element is 
often used as a container for other HTML elements.</p>
<p>The <code class="w3-codespan">&lt;div&gt;</code> element has no required attributes, but <code class="w3-codespan">style</code>, <code class="w3-codespan">class</code> and <code class="w3-codespan">id</code> are common.</p>
<p>When used together with CSS, the <code class="w3-codespan">&lt;div&gt;</code> element can be used to style blocks of 
content:</p>

<h2>The &lt;span&gt; Element</h2>
<p>The <code class="w3-codespan">&lt;span&gt;</code> element is  
an inline container used to mark up a part of a text, or a part of a document.</p>
<p>The <code class="w3-codespan">&lt;span&gt;</code> element has no required attributes, but <code class="w3-codespan">style</code>, <code class="w3-codespan">class</code> and <code class="w3-codespan">id</code> are common.</p>
<p>When used together with CSS, the <code class="w3-codespan">&lt;span&gt;</code> element can be used to style parts of the text:</p>
<h2>Chapter Summary</h2>
<ul className='introul'>
<li>There are two display values: block and inline</li>
  <li>A block-level element always starts on a new line and takes up the full 
  width available</li>
  <li>An inline element does not start on a new line and it only takes up as 
  much width as necessary</li>
  <li>The <code class="w3-codespan">&lt;div&gt;</code> element is a block-level 
  and is often used as a container for other HTML elements</li>
  <li>The <code class="w3-codespan">&lt;span&gt;</code> element is an inline 
  container used to mark up a part of a text, or a part of a document</li>
</ul>
<hr></hr>
<h2>HTML Tags</h2>
<table class="ws-table-all notranslate">
<tr style={ulstate}>
<th>Tag</th>
<th>Description</th>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_div.asp" style={ulstate}>&lt;div&gt;</a></td>
<td>Defines a section in a document (block-level)</td>
</tr>
<tr style={ulstate}>
<td><a href="/tags/tag_span.asp" style={ulstate}>&lt;span&gt;</a></td>
<td>Defines a section in a document (inline)</td>
</tr>
</table>
<div className='fullwi'>
  <Footer/>
  </div>
    </div>
    </div></div>
  )
}

export default Html_blockInline
