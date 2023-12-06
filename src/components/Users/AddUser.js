// AddUser.js
import React, { useState } from 'react';
import './AddUser.css'; // Import the CSS file
import UserList from './UserList'; // Import the UserList component

// Define Card component within AddUser.js
const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState(null);

  const addUserHandler = (event) => {
    event.preventDefault();

    // Validation checks
    if (
      username.trim() === '' ||
      age.trim() === '' ||
      isNaN(age) ||
      !/^[a-zA-Z]+$/.test(username)
    ) {
      setError('Please enter valid data for both fields.');
      return;
    }

    // Add your logic for handling user submission here
    const userData = { username, age };
    console.log('User Submitted:', userData);
    setSubmittedData((prevData) => [...prevData, userData]);
    // Reset input fields and error state after submission
    setUsername('');
    setAge('');
    setError(null);
  };

  return (
    <Card>
      {/* Use Card component to wrap the form */}
      <form onSubmit={addUserHandler}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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

      {submittedData.length > 0 && <UserList users={submittedData} />}
    </Card>
  );
};

export default AddUser;
