import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./EducationCard.css";

const EducationCard = (props) => {
  return (
    <Card className="education-card">
      <Card.Header className="year">{props.year}</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title className="grade_">{props.grade}</Card.Title>
          </Col>
          <Col lg={2} className="percent">
            {props.percent}
          </Col>
        </Row>

        <Card.Text className="institute">{props.institute}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
