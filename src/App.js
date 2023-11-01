import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from './components/Landing page/landingPage';
<<<<<<< HEAD
import Login from './components/Log-In/LogInPage';
import Signup from './components/Log-In/SignUpPage'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
=======
import Nav from './components/NavBar/Nav';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar /> 
        <Routes>
          <Route path="/landing" element={<Page />} />
        </Routes>
      </div>
    </Router>
>>>>>>> origin/main
  );
}

export default App;
