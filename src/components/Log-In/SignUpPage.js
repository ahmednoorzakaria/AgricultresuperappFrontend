import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignUpPage.css';

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    bio: "",
    email: "",
    password: "",
    fileInput: null,
    termsChecked: true,
  });

  // Define a function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://agriconnect-3erw.onrender.com/api/users/register", formData);
      // Handle the response from the backend here
      console.log(response.data);

      // Check if 'proceed' is true in the response
      if (response.data.proceed) {
        // Redirect to the login page
        navigate("/login");
      } else {
        // Handle the case where 'proceed' is false (e.g., display an error message)
        console.error("Signup failed:", response.data.message);
      }
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-signup" role="tabpanel" aria-labelledby="tab-signup">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <p>Sign Up with:</p>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="registerName" className="form-control" name="name" onChange={handleInputChange} />
              <label className="form-label" htmlFor="registerName">Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="registerUsername" className="form-control" name="username" onChange={handleInputChange} />
              <label className="form-label" htmlFor="registerUsername">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="text" id="registerBio" className="form-control" name="bio" onChange={handleInputChange} />
              <label className="form-label" htmlFor="registerBio">Bio</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" name="email" onChange={handleInputChange} />
              <label className="form-label" htmlFor="registerEmail">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="registerPassword" className="form-control" name="password" onChange={handleInputChange} />
              <label className="form-label" htmlFor="registerPassword">Password</label>
            </div>
            <div className="form-outline mb-4">
              <input type="file" id="fileInput" className="form-control" name="fileInput" onChange={handleInputChange} />
              <label className="form-label" htmlFor="fileInput">Choose a File</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked aria-describedby="registerCheckHelpText" name="termsChecked" onChange={handleInputChange} />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agreed to the terms
              </label>
            </div>

            <div>
              <button type="submit" className="btn btn-primary btn-block mb-3">Sign Up</button>
            </div>

            <div className="text-center">
              <p>Already a member? <a href="/login">Log-In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
