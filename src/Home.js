import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './css/App.css';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
<Container>
{/*   <nav className="navbar navbar-dark bg-dark">
    <div className="contaner-fluid">
  <Link to="/personajes"><button className="btn btn-outline-success text-start mx-3" type="button">  Personajes</button></Link>
  <Link to="/personajes"><button className="btn btn-outline-success mx-3" type="button">  Vehiculos</button></Link>
  <Link to="/personajes"><button className="btn btn-outline-success mx-3" type="button">  Planetas</button></Link>
  </div>
  </nav> */}
    <Row className="top justify-content-md-center">
     
      <Col xl={4} className="mt-5">
      <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
</Col>

<Col xl={2}></Col>

<Col xl={4} className="mt-5">
   <Jumbotron fluid>
  <Container>
  <div className="h1 mt-4">Fluid jumbotron</div>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
</Col>

<Col xl={4} className="mt-5">
   <Jumbotron fluid>
  <Container>
    <div className="h1 mt-4">Fluid jumbotron</div>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
</Col>

<Col xl={2}></Col>

<Col xl={4} className="mt-5">
   
   <Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>

</Col>
    </Row>
</Container>
       
    )
}


export default Home;