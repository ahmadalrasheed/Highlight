import React from 'react';
import { Container } from 'react-bootstrap';
import AuthorInfo from '../components/AboutMe/AuthorInfo';
import GithubCode from '../components/AboutMe/GithubCode';

function About() {
  return (
    <div>
      <Container className="py-5">
        <AuthorInfo />
        <GithubCode />
      </Container>
    </div>
  );
}

export default About;
