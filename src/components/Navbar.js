import React from 'react';
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import './NavbarStyles.css';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar1 = () => {
  const { user,isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <Navbar bg="white" expand="lg" className="nav-bar pos">
      <Navbar.Brand href="/">
        <img
          src="../logo-png.png"
          alt=""
          width="50"
          height="50"
          className="d-inline-block align-top ms-4"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="left">
          <Nav.Link href="/tutorials" className="dropdown-link ms-4" style={{color:"#1c1c84"}}>
            Tutorials <i className="fa fa-caret-down"></i>
          </Nav.Link>
          <Nav.Link href="/exercises" className="dropdown-link ms-4" style={{color:"#1c1c84"}}>
            Exercises <i className="fa fa-caret-down"></i>
          </Nav.Link>
          <Nav.Link href="/certified" className="dropdown-link ms-4" style={{color:"#1c1c84"}}>
            Get Certified <i className="fa fa-caret-down"></i>
          </Nav.Link>
          <Nav.Link href="/services" className="dropdown-link ms-4" style={{color:"#1c1c84"}}>
            Services <i className="fa fa-caret-down"></i>
          </Nav.Link>
        </Nav>
        
      </Navbar.Collapse>

{/* /* font-family: 'Pacifico', cursive; */
    // font-family: 'Tilt Prism', cursive;
    /* font-family: 'Rubik Puddles', cursive; */ }

        <Navbar.Collapse>
        {/* <Form className="search-form"> */}
          <div style={{width:"25rem",fontSize:"1.3rem",color:"#1c1c84"}} className='mt-2'>
          <marquee className="Wel">Welcome to H4 Schools🧑🏻‍💻</marquee>
          </div>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button class="my-2 my-sm-0" variant="outline-success"><i className="fa fa-search"></i></Button> */}
            {/* <div class="input-group rounded">
                <FormControl type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <Button className="input-group-text border-0 btn btn-success" id="search-addon">
                    <i className="fas fa-search"></i>
                </Button>
            </div> */}
        {/* </Form> */}
        </Navbar.Collapse>
        <div className="right">
          <div className="buttons">
            {/* <Button className="me-1" variant=""><i class="fa fa-adjust" style={{fontSize:"40px",color:"black"}}></i></Button> */}
            <Button className="me-1 me-4" variant="outline-secondary" >Pro</Button>
            <Button className="me-1 me-4" variant="info">Get Started</Button>
            {/* <Button className="me-1" variant="dark">Log in</Button> */}

          {
              isAuthenticated && 
              (
                  <Button className="me-1" variant="outline-secondary">
                    {user.name}
                  </Button>
              )
            }
          
          {
            isAuthenticated ?  
            (<Button className="me-1 me-4" variant="dark">
          <a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</a>
          </Button>)
          :
          (
          <Button className="me-1 me-4" variant="dark">
            <a onClick={() => loginWithRedirect()}>Log In</a>
          </Button>)
          }
          </div>
        </div>
    </Navbar>
  );
};

export default Navbar1;
