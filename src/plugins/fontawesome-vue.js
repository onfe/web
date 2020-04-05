import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faKeybase } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the required icons to keep the bundle small.
library.add(
  faTwitter,
  faKeybase
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
