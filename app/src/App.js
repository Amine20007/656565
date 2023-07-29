import React from 'react';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Your Navbar Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <h1>Heading Here</h1>

          <div className="card-container">
            <Card>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>Card 1 content goes here.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>Card 2 content goes here.</Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>Card 3 content goes here.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
};

export default App;
