import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {
  render() {
    return (
      <header id='header'>
        <Navbar>
        <h1>Welcome to the City Explorer</h1>
        <p>Please enter a city of your choice to learn about local weather, movies, restaurants and more!</p>
        </Navbar>
      </header>
    )
  }
}

export default Header;
