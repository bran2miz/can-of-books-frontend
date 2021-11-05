import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Profile from "./Components/LoginComponents/Profile";
import Login from "./Components/LoginComponents/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Components/Main.js";

import { withAuth0 } from "@auth0/auth0-react";
import "./CSS/Profile.css";
import "./CSS/BestBooks.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      this.setLoginState(true);
    }
  }

  setLoginState = (bool) => {
    this.setState({ loggedIn: bool });
  };

  render() {
    return (
      <>
        <Router>
          <Header loggedIn={this.state.loggedIn} setLoginState={this.setLoginState} />
          <Switch>
            <Route exact path='/'>
              {this.props.auth0.isAuthenticated ? <Main setLoginState={this.setLoginState} /> : <Login />}
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
