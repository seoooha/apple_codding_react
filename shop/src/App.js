import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { React,useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import data from './data'

function App() {

  let [shoes,update_shose] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand href="#home">seoooha:-)</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className="background">
        <h1>20% season off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Product className="container" shose={shoes}></Product>
    </div>
  );
}


function Product(props){
  return(
    <div className="row">
      { props.shose.map((data,i)=>{
        return(
          <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes"+(i+1)+".jpg"} width="100%" alt=""/>
            <h4>{data.title}</h4>
            <p>{data.content} & {data.price}</p>
          </div>
        )
      })

      }
    </div>
  )
}

export default App;
