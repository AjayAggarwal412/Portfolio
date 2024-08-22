import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container style={{ marginTop: "8%" }}>
      <>
        <h1 className="contact">Contact Me</h1>
      </>

      <Row
        lg={3}
        sm={1}
        xs={1}
        md={1}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Col className="contact-col">
          <Card className="contact-card">
            <Card.Img
              variant="top"
              src={require("../images/email.png")}
              className="image"
            />
            <Card.Body>
              <Card.Title>
                <h2 className="ajay">Ajay Aggarwal</h2>
              </Card.Title>
              <Card.Text className="designation">Web Developer</Card.Text>
              <Card.Text className="mobile">
                Phone: <span className="phone">9818230709</span>
              </Card.Text>
              <Card.Text className="mail">
                Email: &nbsp;
                <a href="mailto:ajayaggarwal412@gmail.com" className="email">
                  ajayaggarwal412@gmail.com
                </a>
              </Card.Text>

              <Card.Text as="div">
                <Row lg={5} xs={4} md={6}>
                  <Col className="md">
                    <a
                      href="https://www.facebook.com/profile.php?id=100016506458748&sk=about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="icon_card">
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                            className="icon_image"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://www.instagram.com/aggarwal_ajay_412/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="icon_card">
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                            className="icon_image"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://www.linkedin.com/in/ajay-aggarwal-b09783200/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="icon_card">
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png"
                            className="icon_image"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://github.com/AjayAggarwal412"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="icon_card">
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
                            className="icon_image"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <ContactForm />
        </Col>
      </Row>

      <hr style={{ marginTop: "15%", border: "2px solid black" }} />
    </Container>
  );
};

export default Contact;
