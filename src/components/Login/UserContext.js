// UserContext.js
import React, { createContext, useReducer, useContext } from 'react';
import Login from './Login';
// Reducer function
const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET_FORM':
      return { ...state, email: '', password: '' };
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

// Initial state
const initialState = { email: '', password: '', users: [] };

// Create context
const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using the context
export const useUserContext = () => {
  return useContext(UserContext);
};
