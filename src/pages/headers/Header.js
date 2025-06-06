import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"
import "./Header.css"


const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dart">
        <Container>
          <Navbar.Brand to="/"><strong>Employee Management System</strong></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-line">Employees</Nav.Link>
            <Nav.Link as={Link} to="/employee" className="nav-line">Post Employee</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;