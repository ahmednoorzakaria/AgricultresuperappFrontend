import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import  UserProfileForm from './components/UserProfileForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignUpPage />} />
          <Route path="/Profile" element={<UserProfileForm />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;