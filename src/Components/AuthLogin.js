import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const AuthLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button className='m-3' style={{ minWidth: "100px" }}
  onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default AuthLogin;