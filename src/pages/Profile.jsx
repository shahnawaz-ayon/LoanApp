import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';

import {
  Card, ListGroup, CardImg, CardText, 
  } from 'react-bootstrap';
import { CardBody ,CardTitle, Container, CardSubtitle} from 'reactstrap';


class Profile extends Component {
  render() {
    return (
      
      <div>
          <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Admin">Admin</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/MoneyManage">Money Management</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Profile">Profile</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Register">Register</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Login">Login</Nav.Link>
  </Nav.Item>
   <Nav.Item>
    <Nav.Link  href="/StyleSet">Style Set</Nav.Link>
  </Nav.Item>
  
</Nav>
<Container>
      <h1>User Profile</h1>
      <p>Details of the user profile</p>
      
      <div>
      <Card>
        <CardImg top width="200%" src='/public/pic.jpg' alt="pic" />
        <CardBody>
          <CardTitle tag="h5">Name</CardTitle>
         
          <Button>Deposit</Button>
        </CardBody>
      </Card>
    </div>
      </Container>
      
      <Container>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
             User Decription
            </ListGroup.Item>
            <ListGroup.Item as="li">Name</ListGroup.Item>
            <ListGroup.Item as="li">Address</ListGroup.Item>
            <ListGroup.Item as="li">Phone</ListGroup.Item>
          </ListGroup>
          </Container>
      
      </div>
    );
  }
}

export default Profile
