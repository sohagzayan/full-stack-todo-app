import { Col, Container, Row } from 'reactstrap';
import './App.css';
import Index from './components/todo/Index';
function App() {
  return (
    <div className="App">
      <Container className='my-3'>
          <Row>
              <Col>
                  <Index />
              </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
