import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
      className="navbar-style"
    >
      <Container>
        <Navbar.Brand className="logo_">
          <div>
            <img
              src={require("../images/signature.png")}
              className="signature"
              alt="signature_img"
            />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="home_">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="about_">
              About
            </Nav.Link>
            <Nav.Link href="#education" className="education_">
              Education
            </Nav.Link>
            <Nav.Link href="#skills" className="skills_">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="project_">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" className="contact_">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
