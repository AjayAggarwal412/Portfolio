import React from "react";
import { Card, Container } from "react-bootstrap";
import "./SkillCard.css";

const SkillCard = (props) => {
  return (
    <Container>
      <Card
        className={`skillcard ${props.react_card} ${props.firebase_card} ${props.mongo_card} ${props.flutter_card}`}
      >
        <Card.Img
          variant="top"
          src={props.image}
          className={`logo ${props.mongo} ${props.firebase} ${props.flutter}`}
        />
        <Card.Body>
          <Card.Title className="tech-name">{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SkillCard;
