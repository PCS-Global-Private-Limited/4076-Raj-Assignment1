import React from 'react';
import Sidebar from './Components/Sidebar';
import AccountForm from './Components/AccountForm';
import './App.css';

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <AccountForm />
      </div>
    </div>
  );
}

export default App;
