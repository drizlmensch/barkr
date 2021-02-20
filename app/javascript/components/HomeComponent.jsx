import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render () {
    return(
      <Jumbotron>
        <h1>Barkr</h1>
        <p>Create an account, share photos of you dog, and find them a playmate!</p>
        <div>
          <Button variant="primary" href={this.props.login} >Login</Button>
          <Button variant="secondary" href={this.props.signup} >Sign Up</Button>
        </div>
      </Jumbotron>
    );
  }
};

Home.propTypes = {
  login: PropTypes.string,
  signup: PropTypes.string
};

export default Home;
