import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

global.toastr = require("toastr")
import "../stylesheets/applications"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

