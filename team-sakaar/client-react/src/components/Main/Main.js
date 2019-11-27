import React from "react";

import "./Main.css";
import { Col, Row, Button } from "react-bootstrap";

function Main() {
  return (
    <Row id="Main" className="">
      <Col className="background-image">
        <div className="background-image flex" style={{ marginTop: 50 }}>
          <p
            className=""
            style={{ fontSize: "2.5em", textShadow: "1px 1px 1px black" }}
          >
            Are you a Musician looking for a Gig?
          </p>
          <p
            className=""
            style={{ fontSize: "2.5em", textShadow: "1px 1px 1px black" }}
          >
            Are you looking for a Musician to play?
          </p>
          <p
            className="font-weight-bold"
            style={{ fontSize: "5em", textShadow: "1px 1px 1px black" }}
          >
            We've Got You Covered!
          </p>
          <p>
            <Button
              href='/signup'
              id="sign-up"
              className="btn-lg active"
              variant="outline-light"
            >
              Sign Up
            </Button>
          </p>
          <p>
            <Button
              id="learn-more"
              className="btn-lg active"
              variant="outline-light"
              
            >
              Learn More
            </Button>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Main;
