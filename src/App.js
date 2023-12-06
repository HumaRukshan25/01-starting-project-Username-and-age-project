// App.js
import React from 'react';
import AddUser from './components/Users/AddUser';
import Card from './components/UI/Card';
import ErrorModal from './components/UI/ErrorModal'; // Import the ErrorModal component
import Wrapper from './components/Helpers/Wrapper'; // Im
function App() {
  return (
    <div>
      <AddUser />
    </div>
  );
}

export default App;
