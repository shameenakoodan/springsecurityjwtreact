import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';  // You'll need to create this Login component

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  // This will be called when signup is successful
  const handleSignupSuccess = (token) => {
    setToken(token);
  };

  const handleLoginSuccess = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp onSignupSuccess={handleSignupSuccess} />} />
          <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div>
        <h1>Welcome! You're signed up and logged in!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </Router>
  );
}

export default App;
