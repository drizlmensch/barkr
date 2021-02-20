import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render () {
    return(
      <div>
        <Jumbotron>
          <h1>Barkr</h1>
          <p>Create an account, share photos of your dog, and find them a playmate!</p>
          <div>
            <Button variant="primary" href={this.props.login} >Login</Button>
            <Button variant="secondary" href={this.props.signup} >Sign Up</Button>
          </div>
        </Jumbotron>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.images[0]}
            />
            <Carousel.Caption>
              <p>Create a profile for one or more of your dogs</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.images[1]}
            />
            <Carousel.Caption>
              <p>Match with puppies of a certain age or size</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.images[2]}
            />
            <Carousel.Caption>
              <p>Find a time and place that's convenient for you</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
};

Home.propTypes = {
  login: PropTypes.string,
  signup: PropTypes.string,
  images: PropTypes.array
};

export default Home;
