// UserList.js
import React from 'react';
import './UserList.css'; // Import the CSS file

const UserList = ({ users }) => {
  return (
    <div>
      <h2>User List:</h2>
      {users.map((user, index) => (
        <div key={index}>
          <p>Username: {user.username}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;