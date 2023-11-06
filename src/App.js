import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Landing page/landingPage";
import Nav from "./components/NavBar/Nav";
import LogIn from "./components/Log-In/LogInPage";
import SignUp from "./components/Log-In/SignUpPage";
import BlogDetails from "./components/BlogDetails/BlogDetails";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(""); // Define loggedInUser state
  const [authToken, setAuthToken] = useState(""); // Define authToken state

  // Check if there is a token stored in localStorage
  const initialLoggedInUser = localStorage.getItem("loggedInUser") || "";
  const initialAuthToken = localStorage.getItem("authToken") || "";

  // Set the loggedInUser and authToken state variables based on the values stored in localStorage
  useEffect(() => {
    setLoggedInUser(initialLoggedInUser);
    setAuthToken(initialAuthToken);
  }, []);

  // Store the user's authentication token in localStorage when it changes
  useEffect(() => {
    if (authToken) {
      localStorage.setItem("authToken", authToken);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [authToken]);

  // Handle logging out the user
  const handleLogout = async () => {
    try {
      // Clear the user's authentication token from localStorage
      localStorage.removeItem("authToken");

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
                setAuthToken={setAuthToken}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
