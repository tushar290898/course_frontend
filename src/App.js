
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import './App.css';
import Addcourse from './components/Addcourse';
import Allcourses from './components/Allcoures';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Container>
       <Card color="info">
         <CardBody><Header/></CardBody>
       </Card>
       <Row className="my-2">
         <Col md={4}><Menu/></Col>
         <Col md={8}>
          <Route path="/" component={Home} exact/>
          <Route path="/Allcourse" component={Allcourses} exact/>
          <Route path="/Addcourse" component={Addcourse} exact/>
         </Col>
       </Row>
     </Container>
      </Router>
     
      
    </div>
  );
}

export default App;
