import React from 'react';
import './UserCard.scss';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </div>
  );
}

export default UserCard;
