import React from 'react';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from './BestBooks';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginButton from './LoginButton';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      login: false
    }
  }

  loginHandler = (user) => {
    this.setState({
      user, login: true,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null, login: false,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.state.login && <BestBooks /> ?<BestBooks /> : <LoginButton/>}
            </Route>
            <Route exact path="/profile" >
              <Profile />
              </Route> 
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
