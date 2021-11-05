import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

const LogoutButton = ({ setLoginState }) => {
  const { logout } = useAuth0();
  return (
    <Button
      variant='warning'
      className='mp-2'
      onClick={() => {
        setLoginState(false);
        logout({ returnTo: window.location.origin });
      }}
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
