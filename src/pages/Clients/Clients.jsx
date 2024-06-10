import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../components/UserCard/UserCard';
import './Clients.scss';

function Clients() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          }
        };

    fetchUsers();
  }, []);

  return (
    <div className="clients">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Clients;
