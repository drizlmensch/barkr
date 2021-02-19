import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

global.toastr = require("toastr")
import "../stylesheets/applications"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

