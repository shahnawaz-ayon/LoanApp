import React, { Component } from 'react';
import { Container, Nav, Button } from 'react-bootstrap';

class Home extends Component {
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
<div className="container">
     <h2>Welcome To Obyoy</h2>
<Container>
  <h1>Hello, world!</h1>
     <p>This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information. 
     </p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat orci eu nulla sagittis, pulvinar dignissim lectus consequat. Etiam in lobortis ligula, vitae ornare lacus. Vivamus scelerisque lorem arcu, vitae eleifend ex commodo a. Quisque rutrum, augue sit amet egestas efficitur, magna nulla lacinia elit, sed suscipit tortor erat vitae enim. Donec egestas odio id aliquet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque mi dolor, egestas nec lacinia non, sodales eu lacus. Donec ultricies nec elit ac ornare. Quisque fermentum ligula ut feugiat cursus. Aliquam auctor suscipit ex a lacinia. Mauris sollicitudin, justo quis fringilla finibus, dui diam ullamcorper nulla, sit amet placerat justo neque quis quam. Praesent nec nibh at tortor ornare dignissim. Morbi tincidunt fringilla turpis at luctus. Vivamus dapibus ligula eget pellentesque luctus. Maecenas ut consectetur lacus, non dignissim nisi. Praesent sodales tellus sit amet faucibus tempus.
     </p>
     <p><Button variant="primary">Learn more</Button>   </p>
</Container>
          </div>
          <footer><br></br>Copyright: Aubichol Intelligent Technologies</footer>
      </div>
    );
  }
}

export default Home;
