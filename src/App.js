import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './pages/SignUpPage';
import LogIn from './pages/LogInPage';

const App = () => {
  return (
    <Router>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      {/* Other routes can go here */}
    </Router>
  );
};

export default App;
