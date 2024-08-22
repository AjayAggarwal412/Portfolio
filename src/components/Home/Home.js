import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Container className="home">
      <Row lg={2} sm={1} xs={1} md={2}>
        <Col>
          <span className="welcome">WELCOME TO MY WORLD</span>
          <br />
          <br />
          <h1 className="title">
            Hi, I’m <span style={{ color: "#ff014f" }}>Ajay Aggarwal</span>
          </h1>

          <div className="title">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 30,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("a Developer.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("a Learner.")
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>

          <br />

          <div className="description">
            Web Developer dedicated to building and optimizing user focused
            websites.
          </div>

          <div>
            <Row>
              <Col>
                <div className="find">FIND WITH ME</div>
                <Row lg={6} xs={5}>
                  <Col
                    className="md"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <a
                      href="https://www.facebook.com/profile.php?id=100016506458748&sk=about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="facebook_card">
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                            className="facebook"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                  <Col data-aos="fade-right" data-aos-duration="1400">
                    <a
                      href="https://www.instagram.com/aggarwal_ajay_412/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="facebook_card" style={{}}>
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                            className="facebook"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                  <Col data-aos="fade-right" data-aos-duration="1800">
                    <a
                      href="https://www.linkedin.com/in/ajay-aggarwal-b09783200/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="facebook_card">
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png"
                            className="facebook"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                  <Col data-aos="fade-right" data-aos-duration="2200">
                    <a
                      href="https://github.com/AjayAggarwal412"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="facebook_card">
                        <Card.Body>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"
                            className="facebook"
                            alt="icon_img"
                          />
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>

        <Col>
          <img src={require("../images/me.png")} className="me" alt="img" />
        </Col>
      </Row>

      <hr style={{ marginTop: "15%", border: "2px solid black" }} id="about" />
    </Container>
  );
};

export default Home;
