import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faKeybase,
  faTwitter,
  faYoutube,
  faGithub,
  faGitlab,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add the required icons to keep the bundle small.
library.add(faKeybase, faTwitter, faYoutube, faGithub, faGitlab, faLinkedin);

Vue.component("font-awesome-icon", FontAwesomeIcon);
