import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/signup' element={< SignUpPage />} />
          <Route path='homepage' element={< HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
