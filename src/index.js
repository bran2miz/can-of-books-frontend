import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Auth0Provider
    domain='dev-cato-bfz.us.auth0.com'
    clientId='EOl3u4gFhCvTh4BEOJbHpwl6rCVYdcMa'
    redirectUri='http://localhost:3000'
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

