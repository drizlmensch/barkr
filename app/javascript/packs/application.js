import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

global.toastr = require("toastr")
import "../stylesheets/applications"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import React from 'react';
import {render} from 'react-dom';
import SampleComponent from '../components/SampleComponent';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<SampleComponent/>, container);
});
