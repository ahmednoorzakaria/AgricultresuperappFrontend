import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from './components/Landing page/landingPage';
import Login from './components/Log-In/LogInPage';
import Signup from './components/Log-In/SignUpPage'
import ProfilePage from './components/ProfilePage/ProfilePage';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile"element={<ProfilePage/>}/>
    </Routes>
  </Router>
  );
}

export default App;
