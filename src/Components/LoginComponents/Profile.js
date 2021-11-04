import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../../CSS/Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    isAuthenticated && (
      <div className='profile'>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    )
  );
};

export default Profile;
