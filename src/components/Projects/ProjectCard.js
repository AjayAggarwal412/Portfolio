import React from "react";
import { Card } from "react-bootstrap";
import "./Project.css";

const ProjectCard = (props) => {
  return (
    <Card className="card-style" data-aos="zoom-in-up" data-aos-duration="1000">
      <Card.Img
        variant="top"
        src={props.image}
        className="Project_image image_hover"
      />

      <Card.Title className="name">{props.name}</Card.Title>
    </Card>
  );
};

export default ProjectCard;
