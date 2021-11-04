import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../CSS/Header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Can of Books</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          <NavItem><Link to="/create" className="nav-link">Create</Link></NavItem>

          

          {this.props.user ? (<NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>) : null}
        </Navbar>
      </>
    );
  }
}

export default Header;
