import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Bootstrap_Carousel = () => {
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
    console.log('value is:', event.target.value +" Clicked ");
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
        <h1>Bootstrap 5 <span class="color_h1">Carousel</span></h1>
        <div className='btns'>

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}
        </div> <hr />
<h2>Carousel / Slideshow</h2>
<p>The Carousel is a slideshow for cycling through elements:</p>
<div id="demo" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" class="d-block w-100"/>
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{cursor:"pointer"}}>
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{cursor:"pointer"}}>
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<hr></hr>
<h3>Example explained</h3>
<p>A description of what each class from the example above do:</p>
<table class="ws-table-all notranslate">
  <tr>
    <th style={{width:"30%"}}>Class</th>
    <th style={{width:"70%"}}>Description</th>
  </tr>
  <tr style={mystyle}>
    <td><code class="w3-codespan" >.carousel</code></td>
    <td>Creates a carousel</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-indicators</code></td>
    <td>Adds indicators for the carousel. These are the little dots at the bottom of each slide (which indicates how many slides there are in the carousel, and which slide the user are currently viewing)</td>
  </tr>
  <tr style={mystyle}>
    <td><code class="w3-codespan">.carousel-inner</code></td>
    <td>Adds slides to the carousel</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-item</code></td>
    <td>Specifies the content of each slide</td>
  </tr>
  <tr style={mystyle}>
    <td><code class="w3-codespan">.carousel-control-prev</code></td>
    <td>Adds a left (previous) button to the carousel, which allows the user to go back between the slides</td>
  </tr>
  <tr>
    <td><code class="w3-codespan">.carousel-control-next</code></td>
    <td>Adds a right (next) button to the carousel, which allows the user to go forward between the slides</td>
  </tr>
  <tr style={mystyle}>
    <td><code class="w3-codespan">.carousel-control-prev-icon</code></td>
    <td>Used together with .carousel-control-prev to create a "previous" button</td>
  </tr>
  <tr style={mystyle}>
    <td><code class="w3-codespan">.carousel-control-next-icon</code></td>
    <td>Used together with .carousel-control-next to create a "next" button</td>
  </tr>
  <tr style={mystyle}>
    <td><code class="w3-codespan">.slide</code></td>
    <td>Adds a CSS transition and animation effect when sliding from one item to the next. Remove this class if you do not want this effect</td>
  </tr>
</table>
<h2>Add Captions to Slides</h2>
<div id="demo2" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo2" data-bs-slide-to="2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.w3schools.com/bootstrap5/la.jpg" alt="Los Angeles" class="d-block w-100"/>
        <div class="carousel-caption">
    <h3>Los Angeles</h3>
    <p>We had such a great time in LA!</p>
  </div>

    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/chicago.jpg" alt="Chicago" class="d-block w-100"/>
      
            <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div> 
    </div>
    <div class="carousel-item">
      <img src="https://www.w3schools.com/bootstrap5/ny.jpg" alt="New York" class="d-block w-100"/>
            <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>  
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev" style={{cursor:"pointer"}}>
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next" style={{cursor:"pointer"}}>
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div>
  )
}

export default Bootstrap_Carousel
