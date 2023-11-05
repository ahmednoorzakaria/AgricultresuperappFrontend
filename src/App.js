import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from './components/Landing page/landingPage';
import Nav from './components/NavBar/Nav';
import LogIn from './components/Log-In/LogInPage';
import SignUp from './components/Log-In/SignUpPage';
import BlogDetails from './components/BlogDetails/BlogDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
