import React from "react";
import AboutMe from '../components/AboutMe'
import { Container } from 'react-bootstrap'

function About() {
  return (
    <div>
      <Container className="py-5">
        <AboutMe />
      </Container>
    </div>
  );
}

export default About;
