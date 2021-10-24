import { Component } from "react";
import Form from 'react-bootstrap/Form';

class LoginForm extends Component {

  render() {
    return(
    <>
    <Form>
    <Form.Label>
      Name
    </Form.Label>
    <Form.Control type="text">

    </Form.Control>
    <Form.Label>
      Email
    </Form.Label>
    <Form.Control type="email" placeholder="Enter Your Email">
      
    </Form.Control>
      
    </Form>
    </>
    );
  }
};

export default LoginForm;
