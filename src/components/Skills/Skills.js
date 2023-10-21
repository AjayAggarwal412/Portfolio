import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillCard from "./SkillCard";
import "./Skills.css";

const Skills = () => {
  return (
    <Container style={{ marginTop: "8%" }}>
      <div>
        <h1 className="skill">Skills</h1>
      </div>

      <Row
        lg={4}
        md={2}
        sm={2}
        xs={2}
        className="card-row"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Col className="html">
          <SkillCard image={require("../images/html-5.png")} name="HTML" />
        </Col>
        <Col className="CSS">
          <SkillCard image={require("../images/css-3.png")} name="CSS" />
        </Col>
        <Col className="javascript">
          <SkillCard image={require("../images/JS-.png")} name="JavaScript" />
        </Col>
        <Col>
          <SkillCard
            image={require("../images/Bootstrap_logo.svg.png")}
            name="Bootstrap"
          />
        </Col>
      </Row>

      <Row
        lg={4}
        md={2}
        sm={2}
        xs={2}
        className="logo_row"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <Col className="react">
          <SkillCard
            image={require("../images/react.png")}
            name="Reactjs"
            react_card="react_card"
          />
        </Col>
        <Col>
          <SkillCard
            image={require("../images/mongo.png")}
            name="MongoDB"
            mongo="mongo"
            mongo_card="mongo_card"
          />
        </Col>
        <Col>
          <SkillCard
            image={require("../images/flutter.png")}
            name="Flutter"
            flutter="flutter"
            flutter_card="flutter_card"
          />
        </Col>
        <Col>
          <SkillCard
            image={require("../images/firebase.png")}
            name="Firebase"
            firebase="firebase"
            firebase_card="firebase_card"
          />
        </Col>
      </Row>
      <hr
        style={{ marginTop: "8%", border: "2px solid black" }}
        id="projects"
      />
    </Container>
  );
};

export default Skills;
