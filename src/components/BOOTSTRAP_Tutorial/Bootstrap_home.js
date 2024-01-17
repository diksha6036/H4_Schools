import React,{useState,useRef} from 'react';
import ReactConfetti from 'react-confetti';
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';

const Bootstrap_home = () => {
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

  const [yellow,setYellow]=useState({
    color:'black',
    backgroundColor:'	#90a3b4'
  })
  const [mystyle,setMystyle]=useState({
    color:"black",
    backgroundColor:"white"
  })
  const [fd,setMyfd]=useState({
       color:'black',
       backgroundColor:'#E7E9EB'
  })
  const [green,setGreen]=useState({
    color:'black',
    backgroundColor:'#aad6ec'
  })
  const [moon,setMymoon]=useState({
    color:"black",
    fontSize:30
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

  }
  // const [handleincr,setincr]=useState({
  // })
  const [ex1, setEx1] = useState('');
  const[conf,setConf]=useState(false);
  var incr=document.getElementById('Inc');
  const handleChange = event => {
    setEx1(event.target.value);
    // console.log('value is:', event.target.value +" Clicked ");
     if(event.target.value=='text-center'){
      setConf(true);
      try{

        incr.innerText='';
      }
      catch(error){

      }
     }
     else{
      try{
        incr.innerText="Incorrect Answer"
       
      }
      catch(error){

      }
      setConf(false);
     }
    
  }

  return (
    <div style={mystyle}>
       <Navbar2/>
      <div className="grid-container">
        <div className="grid-item fd " expand="lg" style={fd}><br />
            <h3 className='heading' style={fd}>Bootstrap 5 Tutorial</h3>
            <div className="newd" ><ul className='ul1' style={fd}>
        <li className="rcolor"  ><a target="_top" href="/bootHome" style={fd}>BS5 HOME</a></li>
   <li className="rcolor" ><a target="_top" href="/bootList" style={fd}>BS5 Get Started</a></li>
    <li className="rcolor" ><a target="_top" href="/bootCarousel" style={fd}>BS5 Containers</a></li>
   <li className="rcolor" ><a target="_top" href="/bootHome" style={fd}>BS5 Grid Basic</a></li>
   <li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Typography</a></li>
   <li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Colors</a></li>
   <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Tables</a></li>
   <li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Images</a></li>
   <li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Jumbotron</a></li>
   <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Alerts</a></li>
    <li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Buttons</a></li>
    <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Button Groups</a></li>
<li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Badges</a></li>
<li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Progress Bars</a></li>
<li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Spinners</a></li>
<div className="tut_overview">
  <li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Pagination</a></li>
  <li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 List Groups</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Cards</a></li>
</div>
<li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Dropdowns</a></li>
<div className="tut_overview">
  <li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Collapse</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Navs</a></li>
  <li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Navbar</a></li>
  <li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Carousel</a></li>
</div>
<li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Modal</a></li>
<li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Tooltip</a></li>
<li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Popover</a></li>
<div className="tut_overview">
  <li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Toast</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Scrollspy</a></li>
  <li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Offcanvas</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Utilities</a></li>
  <li className="rcolor"><a target="_top" href="/bootCarousel" style={fd}>BS5 Dark Mode</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome" style={fd}>BS5 Flex</a></li><br />
  <h2 className="heading" style={{color:"black"}}>Bootstrap 5 Forms</h2>

  <li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Forms</a></li>
  <li className="rcolor"><a target="_top" href="/bootHome style={fd}">BS5 Select Menus</a></li>
</div>
<li className="rcolor"><a target="_top" href="/bootList" style={fd}>BS5 Checks and Radios</a></li>
</ul></div></div>
        <div className="grid-item" id='hihi' ref={divRef}><br />
        <h1>Bootstrap 5 <span className="color_h1">Tutorial</span></h1>
        <div className='btns'>

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}
        </div>
<div className="w3-panel w3-info intro w3-padding-16 topg" style={green}>
<p style={{marginTop:"15px"}}>Bootstrap 5 is the newest version of <a href="/bootstrap/default.asp">Bootstrap</a>, which is the most popular HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.</p>
<p>Bootstrap 5 is completely free to download and use!</p></div>
<h2>Bootstrap 5 vs. Bootstrap 3 & 4</h2>
<p>Bootstrap 5 is the newest version of <a href="/bootstrap/default.asp">Bootstrap</a>; with new components, faster stylesheet and more responsiveness.</p>
<p>Bootstrap 5 supports the latest, stable releases of all major browsers and 
platforms. However, Internet Explorer 11 and down is not supported.</p>
<p>The main differences between Bootstrap 5 and Bootstrap 3 &amp; 4, is that 
Bootstrap 5 has switched to <a href="/js/default.asp">JavaScript</a> instead of <a href="/jquery/default.asp">jQuery</a>.</p>
<div className="w3-panel w3-note" style={yellow}>
<p style={{marginBottom:"8px"}}><strong>Note:</strong> <a href="/bootstrap/default.asp">Bootstrap 3</a> and <a href="/bootstrap4/default.asp">Bootstrap 4</a> is still supported by the team for critical bugfixes and documentation changes, 
and it is perfectly safe to continue to use them. However, new features will NOT be added to 
them.</p>
</div>
<hr></hr>
{
  conf && <ReactConfetti/>
}
<form autoComplete="off" id="w3-exerciseform">
<h2>Test Yourself With Exercises</h2>
<div className="exercisewindow" style={excer}>
<h2>Exercise:</h2>
<p>Use a Bootstrap class to center the following text:</p>
<div className="exerciseprecontainer" style={excer} >
<pre style={{backgroundColor:"transparent",border:"none"}}>
&lt;p className="<input onChange={handleChange}
        value={ex1} name="ex1" maxLength="11" style={{width: "115px"}}/>"	&gt; Hello World!&lt;/p&gt;
</pre>
    <p id='Inc' style={{marginTop:'2rem',
    fontSize:'1.5rem',
    color:'red'}}></p>
</div>
<br/>
</div>
</form>
<div className="w3-info topg" style={green}>
<h2>Did You Know?</h2>
<p><b>H4.CSS</b> is an excellent alternative to Bootstrap 5.</p>
<p><b>H4.CSS</b> is smaller, faster, and easier to use.</p>
<p>If you want to learn H4.CSS, go to our <a href="/w3css/default.asp">H4.CSS 
Tutorial</a>.</p>
</div>
<div className='fullwi'>
  <Footer/>
  </div>
            </div></div>
    </div>
  )
}

export default Bootstrap_home

