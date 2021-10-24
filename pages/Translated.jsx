import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button } from 'react-bootstrap';
import { Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,} from 'reactstrap';

class Translated extends Component {
  render() {
    return (
      
      <div>
          <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  href="/Login">Contributors</Nav.Link>
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
<h1>Page details</h1>
      
      <div>
        <p>At the point of the adoption the care order ends and the adoptive parents
           take over sole parental responsibility. Unless an adoption order is made or the child returns home, care orders last until the child turns 18. Local authorities have
           a duty to continue to promote the welfare of care-leavers until the age of 21, or 25 if the young person wants to.
           </p>

<hr></hr>
<div class="container-sm">

<h3>List of newly translated pair of sentence</h3>
<ListGroup>
      <ListGroupItem><p>1. List of newly translated pair of sentence</p>
      <p>1. List of newly translated pair of sentence</p></ListGroupItem>
      <ListGroupItem><p>2. List of newly translated pair of sentence</p>
      <p>2. List of newly translated pair of sentence</p></ListGroupItem>
      <ListGroupItem><p>3. List of newly translated pair of sentence</p>
      <p>3. List of newly translated pair of sentence</p></ListGroupItem>
      <ListGroupItem><p>4. List of newly translated pair of sentence</p>
       <p> 4. List of newly translated pair of sentence</p></ListGroupItem>
      <ListGroupItem><p>5. List of newly translated pair of sentence</p>
      <p>5. List of newly translated pair of sentence</p></ListGroupItem>
    </ListGroup>
    </div>
<br></br>

<Button color="danger">Home</Button>



      </div>
      
      </Container>
      
      </div>
    );
  }
}

export default Translated;
