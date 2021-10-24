import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Container } from 'reactstrap';


class About extends Component {
  render() {
    return (
      
      <div>
          <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Contributors">Contributors</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Dataset">Dataset</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Register">Translated</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Profile">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/ABC">ABC</Nav.Link>
  </Nav.Item>

 
</Nav>
<Container>
      <h1>Contributors</h1>

      <hr></hr>
      <p>Thanks to the contributors who contributed for this project</p>
      <hr></hr>
      <p>Contributor 1</p>
          <hr></hr>
      <p>Contributor 2</p>
          <hr></hr>
      <p>Contributor 3</p>
          <hr></hr>
      <p>Contributor 4</p>
      
         
      </Container>
      
      </div>
    );
  }
}

export default About
