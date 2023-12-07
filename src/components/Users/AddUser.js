import React, { useState, useRef } from 'react';
import './AddUser.css'; // Import the CSS file
import UserList from './UserList'; // Import the UserList component
// import the Wrapper component if available

// Define Card component within AddUser.js
const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [college, setCollege] = useState(''); // New state for College name
  const [submittedData, setSubmittedData] = useState([]);
  const [error, setError] = useState(null);

  // Refs for name, age, and college inputs
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    // Accessing input values using refs
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollege = collegeInputRef.current.value;

    // Validation checks
    if (
      enteredName.trim() === '' ||
      enteredAge.trim() === '' ||
      enteredCollege.trim() === '' || // Validate College name
      isNaN(enteredAge) ||
      !/^[a-zA-Z]+$/.test(enteredName)
    ) {
      setError('Please enter valid data for all fields.');
      return;
    }

    // Add your logic for handling user submission here
    const userData = { username: enteredName, age: enteredAge, college: enteredCollege };
    console.log('User Submitted:', userData);
    setSubmittedData((prevData) => [...prevData, userData]);
    // Reset input fields and error state after submission
    setUsername('');
    setAge('');
    setCollege('');
    setError(null);

    // Clear input values using refs
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';
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
          ref={nameInputRef}
        />

        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          ref={ageInputRef}
        />

        <label htmlFor="college">College Name</label>
        <input
          id="college"
          type="text"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          ref={collegeInputRef}
        />

        <button type="submit">Add User</button>
      </form>

      {submittedData.length > 0 && <UserList users={submittedData} />}
    </Card>
  );
};

export default AddUser;
