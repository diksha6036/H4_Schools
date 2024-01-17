import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, Form, Button } from 'react-bootstrap';
import { RxCross1 } from 'react-icons/rx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ExercisesStyles.css';

const Exercises = () => {
  const [filter, setFilter] = useState('');
  
  const contentData = [
    {
      id: 1,
      category: 'HTML and CSS',
      topics: [
        { title: 'HTML', type: 'Exercise' },
        { title: 'CSS', type: 'Exercise' },
        { title: 'HTML', type: 'Quiz' },
        { title: "Sass", type: "Tutorial"},
        { title: "Colors", type: "Tutorial"},
        { title: "Icons", type: "Tutorial"}
      ],
    },
    {
      id: 2,
      category: 'Data Analytics',
      topics: [
        { title: 'NumPy', type: 'Exercise' },
        { title: 'Pandas', type: 'Exercise' },
        { title: 'Scipy', type: 'Exercise' },
        { title: 'Excel', type: 'Exercise' },

      ],
    },
    {
      id: 3,
      category: 'JavaScript',
      topics: [
        { title: 'JavaScript', type: 'Exercise' },
        { title: 'React', type: 'Exercise' },
        { title: 'jQuery', type: 'Exercise' },
        { title: 'Vue', type: 'Exercise' },
        { title: "JSON", type: "Quiz"},
        { title: "AJAX", type: "Exercise"},
        { title: "AppML", type: "Quiz"},
      ],
    },
    {
      id: 4,
      category: 'Backend',
      topics: [
        { title: 'Python', type: 'Exercise' },
        { title: 'MySQL', type: 'Exercise' },
        { title: 'PHP', type: 'Exercise' },
        { title: 'Java', type: 'Exercise' },
        { title: 'C', type: 'Quiz' },
        { title: 'C++', type: 'Exercise' },
        { title: 'Git', type: 'Exercise' },
        { title: 'AWS', type: 'Exercise' },
        { title: 'MongoDB', type: 'Exercise' },
      ],
    },
  ];

  const filteredContent = contentData.filter((item) => {
    const categoryMatch = item.category.toLowerCase().includes(filter.toLowerCase());
    const topicsMatch = item.topics.some((topic) =>
      topic.title.toLowerCase().includes(filter.toLowerCase())
    );
    return categoryMatch || topicsMatch;
  });

  return (
    <>
      <Container fluid className="exercises pt-4 ps-5 pb-4">
        <Row>
          <Col xs={4} className="ps-5 pt-2">
            <h2>Exercises</h2>
          </Col>
          <Col xs={3} className="pe-4 ms-5">
            <Form className="search-form">
              <div class="input-group rounded pt-2 pb-2">
                <FormControl
                  type="search"
                  className="form-control rounded"
                  placeholder="Filter..."
                  aria-label="Search"
                  aria-describedby="search-addon"
                  style={{zIndex:1}}
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </Form>
          </Col>
          <Col></Col>
          <Col xs={1}>
            <a href="/">
              <RxCross1 size={25} style={{ color: '#fff' }} />
            </a>
          </Col>
        </Row>
        <Row>
        {filteredContent.map((item) => (
          <Col>
            
              <div key={item.id}>
                <Row className="mt-4">
                  <Row className="ps-5">
                    <h4>{item.category}</h4>
                  </Row>
                  <Row>
                    {item.topics.map((topic, index) => (
                      <div
                        key={index}
                        className="ps-5 lst"
                        style={{ display: 'flex', flexDirection: 'row' }}
                        inline
                      >
                        <h5>{topic.title}</h5>
                        <Link inline className="tut ms-3">
                          {topic.type}
                        </Link>
                      </div>
                    ))}
                  </Row>
                </Row>
              </div>
          </Col>
          ))}
          </Row> 
          <Row>
            <Button className="btn ms-5 ps-3 pe-3" style={{width:"10%"}} variant="secondary" >What is an Exercise?</Button>
            <Button className="btn ms-3 ps-4 pe-4"  style={{width:"10%"}} variant="secondary" >What is a Quiz?</Button>
        </Row>    
      </Container>
    </>
  );
};

export default Exercises;
