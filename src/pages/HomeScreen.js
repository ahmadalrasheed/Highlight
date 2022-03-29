import React, { useState } from 'react';
import Main from '../components/Main';
import { Container } from 'react-bootstrap';
import Welcoming from '../components/Welcoming';

function HomeScreen() {
  const [startStream, updateStartStream] = useState(false);
  return (
    <div>
      <Container>
        {startStream ? <Main /> : <Welcoming updateStartStream={updateStartStream} />}
      </Container>
    </div>
  );
}

export default HomeScreen;
