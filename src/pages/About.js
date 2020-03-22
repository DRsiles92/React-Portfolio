import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg">
        {/* <img src="/Users/debbie/Documents/portfolio/public/me.jpg" alt="me"></img> */}
        <h1>Debbie Reategui Siles</h1>
        <h2>Full Stack Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            Software Engineer with 4 years experience with Tableau & BI reporting. Have extensive experience in sourcing, processing, managing, and distributing business-driven and actionable visual reports for key stakeholders in the insurance domain.
Aspiring to increase my technology stack to become a Full Stack Engineer. Currently enrolled in The Coding Boot Camp at UNC Charlotte receiving my Full Stack developer certificate April 4th, 2020.

I love exploring new ideas and learning new things, this is what led me to a career in the ever-changing world of technology.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
