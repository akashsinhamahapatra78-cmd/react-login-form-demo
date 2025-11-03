import React from 'react';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-wrapper">
        <h1 className="app-title">React Login Form Demo</h1>
        <p className="app-subtitle">Learn useState Hook for Form State Management</p>
        <LoginForm />
        <div className="info-box">
          <h2>How to Use:</h2>
          <ol>
            <li>Enter a username in the input field</li>
            <li>Enter a password in the input field</li>
            <li>Click the "Login" button</li>
            <li>Check the browser console (F12) for output</li>
            <li>Open DevTools to see login attempts logged</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
