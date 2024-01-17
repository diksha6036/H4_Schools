import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FormControl, Form, Button} from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./TutorialsStyles.css";

const Tutorials = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  
const contentData = [
    {
      category: "HTML and CSS",
      topics: [
        { name: "Learn HTML", type: "Tutorial", link: "#" },
        { name: "Learn CSS", type: "Tutorial", link: "#" },
        { name: "Bootstrap", type: "Tutorial", link: "#" },
        { name: "H4.CSS", type: "Tutorial", link: "#" },
        { name: "Sass", type: "Tutorial", link: "#" },
        { name: "Colors", type: "Tutorial", link: "#" },
        { name: "Icons", type: "Tutorial", link: "#" },
        { name: "SVG", type: "Tutorial", link: "#" },
        { name: "Canvas", type: "Tutorial", link: "#" },
        { name: "Graphics", type: "Tutorial", link: "#" },
        { name: "Character Sets", type: "Tutorial", link: "#" },
        { name: "How To", type: "Tutorial", link: "#" },
      ],
    },
    // {
    //   category: "Data Analytics",
    //   topics: [
    //     { name: "Learn AI", type: "Tutorial", link: "#" },
    //     { name: "Learn Generative AI", type: "Tutorial", link: "#" },
    //     { name: "ChatGPT-3.5", type: "Tutorial", link: "#" },
    //     { name: "ChatGPT-4", type: "Tutorial", link: "#" },
    //     { name: "Google Bard", type: "Tutorial", link: "#" },
    //     { name: "Data Science", type: "Tutorial", link: "#" },
    //     { name: "Numpy", type: "Tutorial", link: "#" },
    //     { name: "Pandas", type: "Tutorial", link: "#" },
    //     { name: "SciPy", type: "Tutorial", link: "#" },
    //     { name: "Matplotlib", type: "Tutorial", link: "#" },
    //     { name: "Statistics", type: "Tutorial", link: "#" },
    //     { name: "Excel", type: "Tutorial", link: "#" },
    //     { name: "Google Sheets", type: "Tutorial", link: "#" },
    //   ],
    // },
    {
      category: "JavaScript",
      topics: [
        { name: "Learn JavaScript", type: "Tutorial", link: "#" },
        { name: "Learn React", type: "Tutorial", link: "#" },
        { name: "Learn jQuery", type: "Tutorial", link: "#" },
        { name: "Learn Vue", type: "Tutorial", link: "#" },
        { name: "Learn AngularJS", type: "Tutorial", link: "#" },
        { name: "Learn JSON", type: "Tutorial", link: "#" },
        { name: "Learn AJAX", type: "Tutorial", link: "#" },
        { name: "Learn AppML", type: "Tutorial", link: "#" },
        { name: "Learn H4.JS", type: "Tutorial", link: "#" },
      ],
    },
    // {
    //   category: "Web Building",
    //   topics: [
    //     { name: "Create a Website", type: "Tutorial", link: "#" },
    //     { name: "Create a Server", type: "Tutorial", link: "#" },
    //     { name: "Where to Start-3.5", type: "Tutorial", link: "#" },
    //     { name: "Templates", type: "Tutorial", link: "#" },
    //     { name: "Statistics", type: "Tutorial", link: "#" },
    //     { name: "Certificates", type: "Tutorial", link: "#" },
    //     { name: "Web Dev", type: "Tutorial", link: "#" },
    //     { name: "Code Editor", type: "Tutorial", link: "#" },
    //     { name: "Test Your Typing", type: "Tutorial", link: "#" },
    //     { name: "Play a Code Game", type: "Tutorial", link: "#" },
    //     { name: "Cyber Security", type: "Tutorial", link: "#" },
    //     { name: "Accessibility", type: "Tutorial", link: "#" },
    //     { name: "Join our Newsletter", type: "Tutorial", link: "#" },
    //   ],
    // },
    {
      category: "Backend",
      topics: [
        { name: "Learn Python", type: "Tutorial", link: "#" },
        { name: "Learn SQL", type: "Tutorial", link: "#" },
        { name: "Learn MySQL", type: "Tutorial", link: "#" },
        { name: "Learn PHP", type: "Tutorial", link: "#" },
        { name: "Learn Java", type: "Tutorial", link: "#" },
        { name: "Learn C", type: "Tutorial", link: "#" },
        { name: "Learn C++", type: "Tutorial", link: "#" },
        { name: "Learn C#", type: "Tutorial", link: "#" },
        { name: "Learn R", type: "Tutorial", link: "#" },
        { name: "Learn Kotlin", type: "Tutorial", link: "#" },
        { name: "Learn Go", type: "Tutorial", link: "#" },
        { name: "Learn Django", type: "Tutorial", link: "#" },
        { name: "Learn PostgreSQL", type: "Tutorial", link: "#" },
        { name: "Learn XML", type: "Tutorial", link: "#" },
        { name: "Learn ASP", type: "Tutorial", link: "#" },
        { name: "Learn Node.js", type: "Tutorial", link: "#" },
        { name: "Learn Git", type: "Tutorial", link: "#" },
        { name: "Learn MongoDB", type: "Tutorial", link: "#" },
      ],
    },
  ];  

  return (
    <>
      <Container fluid className="tutorials pt-4 ps-5 pb-4">
        <Row>
          <Col xs={4} className="ps-5 pt-2"><h2>Tutorials</h2></Col>
          <Col xs={3} className="pe-4 ms-5">
            <Form className="search-form">
              <div class="input-group rounded pt-2 pb-2">
                <FormControl
                  type="search"
                  className="form-control rounded"
                  placeholder="Filter..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={filterText}
                  onChange={handleFilterChange}
                  style={{zIndex:1}}
                />
              </div>
            </Form>
          </Col>
          <Col></Col>
          <Col xs={1}><a href="/"><RxCross1 size={25} style={{ color: "#fff" }} /></a></Col>
        </Row>
        <Row>
          {contentData.map((categoryData, index) => (
            <Col key={index}>
              <Row className="mt-3">
                <Row className="ps-5 mb-1">
                  <h4>{categoryData.category}</h4>
                </Row>
                <Row>
                  {categoryData.topics
                    .filter(topic =>
                      topic.name.toLowerCase().includes(filterText.toLowerCase())
                    )
                    .map((topic, topicIndex) => (
                      <div key={topicIndex} className="ps-5 ms-1 lst" style={{ display: 'flex', flexDirection: 'row'}} inline>
                        <h5 className="ms-1">{topic.name}</h5>
                        <a inline className="tut ms-2" href={topic.link}>Tutorial</a><Link inline className="ref ms-1">Reference</Link>
                      </div>
                    ))}
                </Row>
              </Row>
            </Col>
          ))}
        </Row>
        <Row className="ms-4">
            <Row className="pb-5">
                <h5>Next Bootcamp:</h5>
                <h6>November 14th</h6>
                <Button className="btn ms-2" variant="secondary" >Learn More</Button>
            </Row>
        </Row>        
      </Container>
    </>
  );
};

export default Tutorials;
