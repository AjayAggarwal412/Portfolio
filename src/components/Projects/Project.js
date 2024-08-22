import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Project.css";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Container style={{ marginTop: "8%" }}>
      <div>
        <h1 className="project">Projects</h1>
      </div>
      <Row lg={3} sm={1} xs={1}>
        <Col>
          <a
            href="https://amazonclone123.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              name="Amazon Clone"
              image={require("../images/amazon_ss.PNG")}
            />
          </a>
        </Col>
        <Col>
          <a
            href="https://ajayaggarwal412.github.io/ExpenseTracker/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              name="Expense Tracker"
              image={require("../images/expense.PNG")}
            />
          </a>
        </Col>
        <Col>
          <a
            href="https://github.com/AjayAggarwal412/NoteZipper-MERN"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <ProjectCard
              name="Note Zipper"
              image={require("../images/notezipper.PNG")}
            />
          </a>
        </Col>
      </Row>
      <hr
        style={{ marginTop: "10%", border: "2px solid black" }}
        id="contact"
      />
    </Container>
  );
};

export default Project;
