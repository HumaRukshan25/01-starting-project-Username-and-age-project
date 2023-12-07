// App.js
import React from 'react';
import AddUser from './components/Users/AddUser';
import Login from './components/Login/Login';
import Card from './components/UI/Card';
import ErrorModal from './components/UI/ErrorModal'; // Import the ErrorModal component
import Wrapper from './components/Helpers/Wrapper'; // Im
import { UserProvider } from './components/Login/UserContext'
function App() {
  return (
    <UserProvider>
      <AddUser />
      <Login />
    </UserProvider>
  );
};



export default App;
