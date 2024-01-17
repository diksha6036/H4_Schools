import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FormControl, Form, Button} from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./CertifiedStyles.css";

const Certified = () => {
  const [filterText, setFilterText] = useState('');

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
  };

  
const contentData = [
    {
      category: "HTML and CSS",
      topics: [
        { name: "HTML", type: "Course", link: "#" },
        { name: "CSS", type: "Course", link: "#" },
        { name: "Bootstrap", type: "Bootcamp", link: "#" },
        { name: "H4.CSS", type: "Course", link: "#" },
        { name: "Sass", type: "Course", link: "#" },
        { name: "Colors", type: "Course", link: "#" },
        { name: "Icons", type: "Bootcamp", link: "#" },
        { name: "SVG", type: "Course", link: "#" },
        { name: "Canvas", type: "Course", link: "#" },
        { name: "Graphics", type: "Course", link: "#" },
        { name: "Character Sets", type: "Course", link: "#" },
        { name: "How To", type: "Bootcamp", link: "#" },
      ],
    },
    // {
    //   category: "Data Analytics",
    //   topics: [
    //     { name: "AI", type: "Course", link: "#" },
    //     { name: "Generative AI", type: "Course", link: "#" },
    //     { name: "ChatGPT-3.5", type: "Course", link: "#" },
    //     { name: "ChatGPT-4", type: "Course", link: "#" },
    //     { name: "Google Bard", type: "Course", link: "#" },
    //     { name: "Data Science", type: "Course", link: "#" },
    //     { name: "Numpy", type: "Course", link: "#" },
    //     { name: "Pandas", type: "Course", link: "#" },
    //     { name: "SciPy", type: "Course", link: "#" },
    //     { name: "Matplotlib", type: "Course", link: "#" },
    //     { name: "Statistics", type: "Course", link: "#" },
    //     { name: "Excel", type: "Course", link: "#" },
    //     { name: "Google Sheets", type: "Course", link: "#" },
    //   ],
    // },
    {
      category: "JavaScript",
      topics: [
        { name: "JavaScript", type: "Course", link: "#" },
        { name: "React", type: "Course", link: "#" },
        { name: "jQuery", type: "Course", link: "#" },
        { name: "Vue", type: "Course", link: "#" },
        { name: "AngularJS", type: "Bootcamp", link: "#" },
        { name: "JSON", type: "Course", link: "#" },
        { name: "AJAX", type: "Course", link: "#" },
        { name: "AppML", type: "Course", link: "#" },
        { name: "H4.JS", type: "Bootcamp", link: "#" },
      ],
    },
    // {
    //   category: "Web Building",
    //   topics: [
    //     { name: "Create a Website", type: "Course", link: "#" },
    //     { name: "Create a Server", type: "Course", link: "#" },
    //     { name: "Where to Start-3.5", type: "Course", link: "#" },
    //     { name: "Templates", type: "Course", link: "#" },
    //     { name: "Statistics", type: "Course", link: "#" },
    //     { name: "Certificates", type: "Course", link: "#" },
    //     { name: "Web Dev", type: "Course", link: "#" },
    //     { name: "Code Editor", type: "Course", link: "#" },
    //     { name: "Test Your Typing", type: "Course", link: "#" },
    //     { name: "Play a Code Game", type: "Course", link: "#" },
    //     { name: "Cyber Security", type: "Course", link: "#" },
    //     { name: "Accessibility", type: "Course", link: "#" },
    //     { name: "Join our Newsletter", type: "Course", link: "#" },
    //   ],
    // },
    {
      category: "Backend",
      topics: [
        { name: "Python", type: "Course", link: "#" },
        { name: "SQL", type: "Course", link: "#" },
        { name: "MySQL", type: "Bootcamp", link: "#" },
        { name: "PHP", type: "Course", link: "#" },
        { name: "Java", type: "Course", link: "#" },
        { name: "C", type: "Course", link: "#" },
        { name: "C++", type: "Bootcamp", link: "#" },
        { name: "C#", type: "Course", link: "#" },
        { name: "R", type: "Course", link: "#" },
        { name: "Kotlin", type: "Course", link: "#" },
        { name: "Go", type: "Course", link: "#" },
        { name: "Django", type: "Bootcamp", link: "#" },
        { name: "PostgreSQL", type: "Course", link: "#" },
        { name: "XML", type: "Course", link: "#" },
        { name: "ASP", type: "Course", link: "#" },
        { name: "Node.js", type: "Bootcamp", link: "#" },
        { name: "Git", type: "Course", link: "#" },
        { name: "MongoDB", type: "Course", link: "#" },
      ],
    },
  ];  

  return (
    <>
      <Container fluid className="certified pt-4 ps-5 pb-4">
        <Row>
          <Col xs={4} className="ps-5 pt-2"><h2>Certified</h2></Col>
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
                        <a inline className="tut ms-2" href={topic.link}>{topic.type}</a><Link inline className="ref ms-1">Reference</Link>
                      </div>
                    ))}
                </Row>
              </Row>
            </Col>
          ))}
        </Row>
        <Row>
            <Button className="btn ms-5 ps-3 pe-3" style={{width:"10%"}} variant="secondary" >What is an Certificate?</Button>
            <Button className="btn ms-3 ps-4 pe-4"  style={{width:"10%"}} variant="secondary" >What is a Bootcamp?</Button>
        </Row>       
      </Container>
    </>
  );
};

export default Certified;
