import React from "react";
import Header from "./MainComponents/Header";
import Footer from "./MainComponents/Footer";
import Profile from "./LoginComponents/Profile";
import Login from "./LoginComponents/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestBooks from "./MainComponents/BestBooks.js";

import { withAuth0 } from "@auth0/auth0-react";
import "./CSS/Profile.css";
import "./CSS/BestBooks.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  loginHandler = (user, event) => {
    event.preventDefault();
    this.setState({
      user,
    });
  };

  logoutHandler = () => {
    this.setState({
      user: null,
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              {this.props.auth0.isAuthenticated ? (
                <BestBooks />
              ) : (
                <Login onLoginSubmit={this.loginHandler} handleFormInput={this.formInputHandler} />
              )}
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
