import { Component } from 'react';

class Profile extends Component {

  render() {
    /* DONE: render information about logged in user */
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
      <>
        <h1>Username: {this.props.user.username}</h1>
        <h2>Email: {this.props.user.email}</h2>
      </>
    );
  }
}

export default Profile;
