import React,{useState,useRef} from 'react'
import Navbar2 from '../Navbar2';
import { Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import Footer from '../Footer';
const Bootstrap_list = () => {
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
        <h1>Bootstrap 5 <span class="color_h1">List Groups</span></h1>
        <div className='btns'>

<Button variant="success" className='down-btn' onClick={handleButtonClick} style={{backgroundColor:"	#000042",borderColor:"	#000042"}}>Start reading ❯</Button>{' '}
        {/* <Button variant="success">❮ Home</Button>{' '}  */}
        <Button className="me-1" variant="" onClick={toggle}><i class="fa-solid fa-moon" style={moon}></i></Button>
        {/* <Button variant="success">Next ❯</Button>{' '} */}
        </div>
<hr/>

<h2>Basic List Groups</h2>
<p>The most basic list group is an unordered list with list items:</p>
<ul class="list-group introul" style={{margin:"20px 0"}}  >
  <li class="list-group-item" style={mystyle}>First item</li>
  <li class="list-group-item" style={mystyle}>Second item</li>
  <li class="list-group-item" style={mystyle}>Third item</li>
</ul>
<p>To create a basic list group, use an <code class="w3-codespan">&lt;ul&gt;</code> element with class <code class="w3-codespan">.list-group</code>, and
<code class="w3-codespan">&lt;li&gt;</code> elements with class <code class="w3-codespan">.list-group-item</code>:</p>
<h2>Active State</h2>
<ul class="list-group introul" style={{margin:"20px 0"}}>
  {/* <li class="list-group-item active" style={{zIndex:"1!important"}}>Active item</li> */}
  <li class="list-group-item active" style={mystyle}>Active item</li>
  <li class="list-group-item" style={mystyle}>Second item</li>
  <li class="list-group-item" style={mystyle}>Third item</li>
</ul>
<p>Use the <code class="w3-codespan">.active</code> class to highlight the current item:</p><hr />
<h2>List Group With Linked Items</h2>
<div class="list-group" style={{margin:"20px 0"}}>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action" style={mystyle}>First item</a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action" style={mystyle}>Second item</a>
  <a href="javascript:void(0)" class="list-group-item list-group-item-action" style={mystyle}>Third item</a>
</div>
<p>To create a list group with linked items, use <code class="w3-codespan">&lt;div&gt;</code> instead of <code class="w3-codespan">&lt;ul&gt;</code> 
and <code class="w3-codespan">&lt;a&gt;</code> instead of <code class="w3-codespan">&lt;li&gt;</code>.
Optionally, add the <code class="w3-codespan">.list-group-item-action</code> class if you want a grey background color on 
hover:</p><hr />
<h2>Disabled Item</h2>
  <p>The <code class="w3-codespan">.disabled</code> class adds a lighter text color to the disabled item. And when used on links, it will remove the hover effect:</p>
  <div class="list-group" style={{margin:"20px 0"}}>
    <a href="javascript:void(0)" class="list-group-item disabled" style={mystyle}> Disabled item</a>
    <a href="javascript:void(0)" class="list-group-item disabled" style={mystyle}>Disabled item</a>
    <a href="javascript:void(0)" class="list-group-item xxhey" style={mystyle}>Third item</a>
  </div><hr />
  <h2>Flush / Remove Borders</h2>
<p>Use the <code class="w3-codespan">.list-group-flush</code> class to remove some borders and rounded corners:</p>
<div class="container " style={{margin:" 0 -16px"}} >
<ul class="list-group list-group-flush introul">
  <li class="list-group-item" style={mystyle}>First item</li>
  <li class="list-group-item" style={mystyle}>Second item</li>
  <li class="list-group-item" style={mystyle}>Third item</li>
  <li class="list-group-item" style={mystyle}>Fourth item</li>
</ul>
</div>
<hr/>

<h2>Contextual Classes</h2>
<p>Contextual classes can be used to add color to the list items:</p>
<ul class="list-group introul" style={{margin:"20px 0"}}>
  <li class="list-group-item list-group-item-success">Success item</li>
  <li class="list-group-item list-group-item-secondary">Secondary item</li>
  <li class="list-group-item list-group-item-info">Info item</li>
  <li class="list-group-item list-group-item-warning">Warning item</li>
  <li class="list-group-item list-group-item-danger">Danger item</li>
  <li class="list-group-item list-group-item-primary">Primary item</li>
  <li class="list-group-item list-group-item-dark">Dark item</li>
  <li class="list-group-item list-group-item-light">Light item</li>
</ul>

<p>The classes for coloring list-items are: <code class="w3-codespan">
.list-group-item-success</code>, <code class="w3-codespan">list-group-item-secondary</code>, <code class="w3-codespan">list-group-item-info</code>, <code class="w3-codespan">
list-group-item-warning</code>, <code class="w3-codespan">.list-group-item-danger</code>, <code class="w3-codespan">.list-group-item-primary</code>, <code class="w3-codespan">list-group-item-dark</code> and <code class="w3-codespan">list-group-item-light</code>,:</p>
<hr/>

<h2>Link items with Contextual Classes</h2>
<div class="list-group" style={{margin:"20px 0"}}>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action">Action item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-success">Success item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-secondary">Secondary item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-info">Info item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-warning">Warning item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-danger">Danger item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-primary">Primary item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-dark">Dark item</a>
    <a href="javascript:void(0)" class="list-group-item list-group-item-action list-group-item-light">Light item</a>
</div><hr />
<h2>List Group with Badges</h2>
<p>Combine <code class="w3-codespan">.badge</code> classes with utility/helper classes to add badges inside the list group:</p>
<div class="container" style={{margin: "0 -16px"}}>
  <ul class="list-group introul">
    <li class="list-group-item d-flex justify-content-between align-items-center" style={mystyle}>
      Inbox
      <span class="badge bg-primary rounded-pill">12</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center" style={mystyle}>
      Ads
      <span class="badge bg-primary rounded-pill">50</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center" style={mystyle}>
      Junk
      <span class="badge bg-primary rounded-pill">99</span>
    </li>
  </ul>
</div><hr />
<div className='fullwi'>
  <Footer/>
  </div>
        </div></div>
    </div>
  )
}

export default Bootstrap_list
