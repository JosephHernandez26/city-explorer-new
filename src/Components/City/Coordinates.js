import React from 'react';

class Coordinates extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <>
        <h2>Check out {this.props.location.name}</h2>
        <p>
          {this.props.location.name} is physically located at{' '}
          {this.props.location.lat} latitude and by {this.props.location.lon}{' '}
          longitude.
        </p>
      </>
    );
  }
}

export default Coordinates;
