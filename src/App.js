import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import LogIn from "./components/Log-In/LogInPage";
import SignUp from "./components/Log-In/SignUpPage";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import Profile from "./components/Profile/Profile";
import Page from "./components/Landing page/landingPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(""); // Define loggedInUser state

  // Check if there is a token stored in localStorage
  const initialLoggedInUser = localStorage.getItem("jwtToken") || "";

  // Set the loggedInUser and authToken state variables based on the values stored in localStorage
  useEffect(() => {
    setLoggedInUser(initialLoggedInUser);
  }, []);



  // Handle logging out the user
  const handleLogout = async () => {
    try {
      // Clear the user's authentication token from localStorage
      localStorage.removeItem("jwtToken");

      // Set the loggedInUser state variable to an empty string
      setLoggedInUser("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Nav loggedInUser={loggedInUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route
            path="/login"
            element={
              <LogIn
                setLoggedInUser={setLoggedInUser}
                loggedInUser={loggedInUser}
               
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Page" element={<Page />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
