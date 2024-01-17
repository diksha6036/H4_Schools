import React, { useState } from 'react';
import { FormControl, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './ServicesStyles.css';

const Services = () => {
  const contentData = [
    {
      title: 'Free Tutorials',
      description: 'Enjoy our free tutorials like millions of other internet users since 1999',
    },
    {
      title: 'Reference',
      description: 'Explore our selection of references covering all popular coding languages.',
    },
    {
      title: 'Create a website',
      description: 'Create your own website with H4-Schools Spaces-no setup required',
    },
    {
      title: 'Web Development',
      description: 'Learn web development with our comprehensive resources and tutorials.',
    },
    {
      title: 'Mobile App Development',
      description: 'Build mobile apps for iOS and Android with our step-by-step guides.',
    },
    {
        title: 'Free Tutorials',
        description: 'Enjoy our free tutorials like millions of other internet users since 1999',
      },
      {
        title: 'Reference',
        description: 'Explore our selection of references covering all popular coding languages.',
      },
      {
        title: 'Create a website',
        description: 'Create your own website with H4-Schools Spaces-no setup required',
      },
      {
        title: 'Web Development',
        description: 'Learn web development with our comprehensive resources and tutorials.',
      },      
        {
            title: 'Free Tutorials',
            description: 'Enjoy our free tutorials like millions of other internet users since 1999',
          },
          {
            title: 'Reference',
            description: 'Explore our selection of references covering all popular coding languages.',
          },
          {
            title: 'Create a website',
            description: 'Create your own website with H4-Schools Spaces-no setup required',
          },
          {
            title: 'Web Development',
            description: 'Learn web development with our comprehensive resources and tutorials.',
          },
          {
            title: 'Mobile App Development',
            description: 'Build mobile apps for iOS and Android with our step-by-step guides.',
          }
  ];

  // State for filtering content
  const [filter, setFilter] = useState('');

  // Function to filter content
  const filteredContent = contentData.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase())
  );

  function chunkArray(arr, chunkSize) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  return (
    <>
      <Container fluid className="services pt-4 ps-5 pb-4">
        <Row>
          <Col xs={4} className="ps-5 pt-2">
            <h2>All Our Services</h2>
          </Col>
          <Col xs={3} className="pe-4 ms-5">
            <Form className="search-form">
              <div className="input-group rounded pt-2 pb-2">
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
          <Col xs={1} className="icons">
            <a href="/">
              <RxCross1 size={25} style={{ color: '#fff' }} />
            </a>
          </Col>
        </Row>
        <Row className="mt-4 ms-4">
          <Col xs={7}>
            H4Schools offers a wide range of services and products for beginners and professionals,
            helping millions of people everyday to learn and master new skills.
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-4 me-5">
  {chunkArray(filteredContent, 3).map((row, rowIndex) => (
    <CardGroup key={rowIndex} className="mb-4">
      {row.map((item, index) => (
        <Card className="cards ms-4" key={index}>
          <Card.Body>
            <Card.Title className="title">{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardGroup>
  ))}
</Row>
        <Row className="mt-3 pt-3 mb-3 pb-3 ms-3">
          <Col xs={1} className="icons">
            <Link to="https://www.facebook.com/w3schoolscom/" target="_blank">
              <SlSocialFacebook size={25} style={{ color: '#fff' }} />
            </Link>
          </Col>
          <Col xs={1} className="icons">
            <Link to="https://discord.com/invite/6Z7UaRbUQM" target="_blank">
              <SlSocialTwitter size={25} style={{ color: '#fff' }} />
            </Link>
          </Col>
          <Col xs={1} className="icons">
            <Link to="https://www.instagram.com/w3schools.com_official/" target="_blank">
              <SlSocialInstagram size={25} style={{ color: '#fff' }} />
            </Link>
          </Col>
          <Col xs={1} className="icons">
            <Link to="https://www.linkedin.com/company/w3schools.com/" target="_blank">
              <SlSocialLinkedin size={25} style={{ color: '#fff' }} />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
