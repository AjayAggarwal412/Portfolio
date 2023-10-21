import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Education.css";
import EducationCard from "./EducationCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

AOS.init();

const Education = () => {
  return (
    <Container className="education">
      <div>
        <h1 className="education_h1">Education</h1>
      </div>
      <Row lg={2} xs={1}>
        <Col data-aos="zoom-in-up" data-aos-duration="1000">
          <EducationCard
            year="2021-2023"
            grade="Masters of Computer Applications"
            percent="95%"
            institute="Vivekananda Institute of Professional Studies"
          />
        </Col>
        <Col data-aos="zoom-in-up" data-aos-duration="1000">
          <EducationCard
            year="2018-21"
            grade="Bachelor of Computer Applications"
            percent="93%"
            institute="Vivekananda Institute of Professional Studies"
          />
        </Col>
      </Row>

      <Row lg={2} xs={1}>
        <Col data-aos="zoom-in-up" data-aos-duration="1000">
          <EducationCard
            year="2017-18"
            grade="12th Grade"
            percent="77%"
            institute="Greenway Modern School"
          />
        </Col>
        <Col data-aos="zoom-in-up" data-aos-duration="1000">
          <EducationCard
            year="2015-16"
            grade="10th Grade"
            percent="87.4%"
            institute="Greenway Modern School"
          />
        </Col>
      </Row>
      <hr style={{ marginTop: "10%", border: "2px solid black" }} id="skills" />
    </Container>
  );
};

export default Education;
