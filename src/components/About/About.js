import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();

  return (
    <>
      <Container style={{ marginTop: "10%" }}>
        <Row>
          <Col
            className="about-col"
            lg={5}
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img
              src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/ab-img.png"
              className="student_img"
            />
          </Col>

          <Col data-aos="flip-right" data-aos-duration="1000">
            <div>
              <h1 className="about">About Me</h1>
            </div>

            <div className="intro">
              Hello, I’m a Ajay Aggarwal, web-developer. I have rich experience
              in web site design & building and customization. Also I am good at
            </div>

            <Row xs={2} lg={5} className="tech_row">
              <Col>
                <div className="tech">HTML</div>
              </Col>
              <Col>
                <div className="tech">CSS</div>
              </Col>
              <Col>
                <div className="tech">JavaScript</div>
              </Col>
              <Col>
                <div className="tech">C</div>
              </Col>
              <Col className="C">
                <div className="C-tech">C++</div>
              </Col>
            </Row>

            <Row lg={5} xs={2} className="tech_row tech_row2">
              <Col>
                <div className="tech">Bootstrap</div>
              </Col>
              <Col>
                <div className="tech">React</div>
              </Col>
              <Col>
                <div className="tech">MongoDB</div>
              </Col>
              <Col>
                <div className="tech">Flutter</div>
              </Col>
              <Col>
                <div className="tech">Firebase</div>
              </Col>
            </Row>
            <br />
            <br />
            <a
              href={require("../resume/Ajay_Aggarwal_Resume.pdf")}
              target="_blank"
              download="Ajay Aggarwal Resume"
              // rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="CV">Download CV</button>
            </a>
          </Col>
        </Row>

        <hr
          style={{ marginTop: "15%", border: "2px solid black" }}
          id="education"
        />
      </Container>
    </>
  );
};

export default About;
