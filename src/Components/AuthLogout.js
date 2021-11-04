import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

const AuthLogout = () => {
  const { logout } = useAuth0();

  return <Button className='m-3' style={{ minWidth: "100px" }}
  onClick={() => logout()}>Log Out</Button>;
};

export default AuthLogout;