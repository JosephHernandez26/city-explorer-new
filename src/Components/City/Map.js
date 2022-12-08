import React from 'react';
import Image from 'react-bootstrap/Image';

class Map extends React.Component {
  render() {
    return (
      <Image
        src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.props.location.lat},${this.props.location.lon}&size=${window.innerWidth}x300&format=jpg&zoom=12`}
        alt={this.props.location.name}
        title={this.props.location.name}
      />
    );
  }
}

export default Map;
