import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,} from 'reactstrap';

class Profile extends Component {
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
    <Nav.Link  href="/Translated">Translated</Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link  href="/Profile">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/ABC">ABC</Nav.Link>
  </Nav.Item>

 
</Nav>
<Container>
      <h1>Contributors Profile</h1>
      <p>checkout the contributor's profile</p>
         
      <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Contributor's image" />
        <CardBody>
          <CardTitle tag="h5">Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Designation</CardSubtitle>
          <CardText>Description</CardText>
          <Button>Connect</Button>
        </CardBody>
      </Card>
    </div>
      </Container>

      <Container>
      <h1>Contributors Profile</h1>
      
         
      <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Contributor's image" />
        <CardBody>
          <CardTitle tag="h5">Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Designation</CardSubtitle>
          <CardText>Description</CardText>
          <Button>Connect</Button>
        </CardBody>
      </Card>
    </div>
      </Container>

      <Container>
      <h1>Contributors Profile</h1>
      
         
      <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Contributor's image" />
        <CardBody>
          <CardTitle tag="h5">Name</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Designation</CardSubtitle>
          <CardText>Description</CardText>
          <Button>Connect</Button>
        </CardBody>
      </Card>
    </div>
      </Container>
      
      </div>
    );
  }
}

export default Profile
