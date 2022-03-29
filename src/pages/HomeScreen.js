import React from 'react';
import { Container } from 'react-bootstrap';
import Headline from '../components/Welcoming/Headline';
import Description from '../components/Welcoming/Description';

function HomeScreen() {
  return (
    <div>
      <Container className="py-5">
        <Headline />
        <Description />
      </Container>
    </div>
  );
}

export default HomeScreen;
