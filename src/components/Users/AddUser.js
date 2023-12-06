// AddUser.js
import React, { useState } from 'react';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    // Add your logic for handling user submission here
    console.log('User Submitted:', { username, age });
    // Reset input fields after submission
    setUsername('');
    setAge('');
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="age">Age (Years)</label>
      <input
        id="age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
