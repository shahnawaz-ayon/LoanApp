import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button, Form, FormGroup, Label, Input } from 'react-bootstrap';
import { Container } from 'reactstrap';


class Dataset extends Component {
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
      <h1>Dataset</h1>
      
      <div>
        <p>This page will contain the dataset</p>
<br></br>
<br></br>
<form>
<textarea rows="10" cols="100">

</textarea>

</form>

<br></br>

<Button color="danger">Upload/ Submit</Button>




      </div>
      </Container>
      </div>
    );
  }
}

export default Dataset
