import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

//Instantiates storage
const storage = {};
console.log({ storage });

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayError: false,
      displayMap: false,
      errorMessage: '',
      latitude: '',
      location: '',
      longitude: '',
      movies: [],
      searchQuery: '',
      weather: [],
      yelp: []
    };
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Main;