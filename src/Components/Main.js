import React from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import CitySearch from './City/CitySearch';
import Coordinates from './City/Coordinates';
import Map from './City/Map';

//Instantiates storage
const storage = {};
console.log({ storage });

class Main extends React.Component {
  constructor(props) {
    super(props);
    //this.handleCityChange = this.handleCityChange.bind(this);
    this.state = {
      displayError: false,
      displayMap: false,
      errorMessage: null,
      location: [],
      latitude: '',
      longitude: '',
      movies: [],
      weather: [],
      yelp: [],
      searchQuery: '',
    };
  }

  // updates the city with the searchQuery
  searchedCity = event => {
    this.setState({ searchQuery: event.target.value });
  };

  getCityLocation = async () => {
    if (storage[this.state.searchQuery] === undefined) {
      console.log(
        `getting location data for ${this.state.searchQuery} from the API`
      );
      const locationUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;
      let location;
      try {
        location = await axios.get(locationUrl);
        console.log('successfully got the location', { location });
        this.setState({
          location: location.data[0],
          name: location.data[0].display_name,
          latitude: location.data[0].lat,
          longitude: location.data[0].lon,
          displayMap: true,
          displayError: false,
        });
        storage[this.state.searchQuery] = location.data[0];
      } catch (error) {
        console.log('error getting LOCATION');
        this.setState({
          displayMap: false,
          displayError: true,
          errorMessage:
            error.response.status + ': ' + error.response.data.error,
        });
      }
    } else {
      console.log('getting location information from storage');
      this.setState({
        location: storage[this.state.searchQuery],
        name: storage[this.state.searchQuery].display_name,
        latitude: storage[this.state.searchQuery].lat,
        longitude: storage[this.state.searchQuery].lon,
        displayMap: true,
        displayError: false,
      });
    }
    // this.getWeather();
    // this.getMovies();
    // this.getYelp();
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <CitySearch
              handleCityChange={this.searchedCity}
              handleGetCity={this.getCityLocation}
              errorMessage={this.state.errorMessage}
              displayError={this.state.displayError}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Coordinates location={this.state.location} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Map location={this.state.location} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
