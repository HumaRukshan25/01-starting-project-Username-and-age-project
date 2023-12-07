import React, { useReducer } from 'react';
import './Login.css';
// Reducer function
const loginReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET_FORM':
      return { email: '', password: '' };
    default:
      return state;
  }
};

const Login = () => {
  // Initial state
  const initialState = { email: '', password: '' };

  // useReducer hook
  const [state, dispatch] = useReducer(loginReducer, initialState);

  // Event handlers
  const handleEmailChange = (e) => {
    dispatch({ type: 'SET_EMAIL', payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: 'SET_PASSWORD', payload: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add logic for login submission using state.email and state.password
    console.log('Logging in with:', state.email, state.password);

    // Reset the form after submission
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={state.email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={state.password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
