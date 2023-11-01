import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from './components/Landing page/landingPage';
import Nav from './components/NavBar/Nav';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
