import { withAuth0 } from '@auth0/auth0-react';
import React from 'react';

function Header({ auth0 }) {
  const { user, logout } = auth0;

  if (!user) {
    return null;
  }

  return (
    <div className="header">
      <img src={user.picture} alt="avatar" />
      <span>{user.email}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default withAuth0(Header);
