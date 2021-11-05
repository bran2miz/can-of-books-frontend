import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Auth0Provider
    domain='dev-cato-bfz.us.auth0.com'
    clientId='EOl3u4gFhCvTh4BEOJbHpwl6rCVYdcMa'
    redirectUri='http://localhost:3002'
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// Brandon Auth0
// domain="dev-cato-bfz.us.auth0.com"
// clientId="EOl3u4gFhCvTh4BEOJbHpwl6rCVYdcMa"
// redirectUri='http://localhost:3002'

// Ian
// domain='dev-942zxsvz.us.auth0.com'
// clientId='fQQ3hSGcfifzzA6wsO2dtBlHcm3n1zMa'
// redirectUri={window.location.origin}
