import React from 'react';
import Card from 'react-bootstrap/Card';
import '../CSS/Login.css';
import AuthLogin from '../Components/AuthLogin.js';
import AuthLogout from '../Components/AuthLogout.js';
import LoginForm from './LoginForm';



class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  showFormHandler = () => {
    this.setState({
      showForm: true
    });
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Log In</Card.Title>
            <Card.Text>
              Click Below to Log In
            </Card.Text>
            {/* {this.state.showForm ? <LoginForm onLoginSubmit={this.props.onLoginSubmit}/> : <AuthLogin /> } */}
            {this.state.showForm ? <AuthLogout /> : <AuthLogin /> }
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Login;