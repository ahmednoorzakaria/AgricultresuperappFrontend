import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './LogInPage.css';
import Nav from "../NavBar/Nav"; // Import the Nav component

function Login({ setLoggedInUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Initialize navigate for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://agriconnect-3erw.onrender.com/api/users/Signin", formData);

      if (response.data.proceed) {
        // If login is successful, set the logged-in user's name
        setLoggedInUser(response.data.username); // Set loggedInUser in App
        console.log("Login successful:", response.data.message);

        // Redirect to the specified route after a successful login (in this case, "/")
        navigate("/");
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>

        // Display the login form when not logged in
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <p>Log In with:</p>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="loginName" className="form-control" name="email" onChange={handleInputChange} />
              <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="loginPassword" className="form-control" name="password" onChange={handleInputChange} />
              <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                  <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <div className="button container">
              <button type="submit" className="btn btn-primary btn-block mb-4">Log-In</button>
            </div>

            <div className="text-center">
              <p>Not a member? <a href="/Signup">Sign-Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
