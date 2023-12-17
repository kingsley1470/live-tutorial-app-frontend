// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import LiveStream from './components/Dashboard/LiveStream';
import UserProfile from './components/Dashboard/UserProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/live-stream" component={LiveStream} />
        <Route path="/user-profile" component={UserProfile} />
      </Routes>
    </Router>
  );
};

export default App;
