import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import clmlogo from "../images/CLMLogo.png";
import TopMenu from "./TopMenu";

export default function Menu() {
  return (
    <>
      <TopMenu />

      <Navbar expand="lg" className="mainmenu">
        <Container >
          {/* Logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={clmlogo} alt="CLM Tyres" className="img-fluid tyrelogo" />
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus" className="nav-link">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">
                Tyres Brand
              </Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-link">
                4 * 4 Tyres
              </Nav.Link>

              <Nav.Link as={Link} to="/" className="nav-link">
                Car Tyres
              </Nav.Link>

              <Nav.Link as={Link} to="/" className="nav-link">
                Faqs
              </Nav.Link>

              {/* <Nav.Link as={Link} to="/vehicle-info2" className="nav-link">
                Vehicle Information Show 2 
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}