import React from 'react';
import './App.css';
import Login from './components/Login';
import { UserProvider } from './UserContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserProvider>
          <Login />
        </UserProvider>
        
      </header>
    </div>
  );
}

export default App;
