import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeComponent';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('path_data')
  const data = JSON.parse(node.getAttribute('data')) 
  ReactDOM.render(<Home login={data.login} signup={data.signup} images={data.images} />, document.getElementById('root'));
})

