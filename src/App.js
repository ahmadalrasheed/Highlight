import HomeScreen from './pages/HomeScreen';
import Stream from './pages/Stream';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <main>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/stream" element={<Stream />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
