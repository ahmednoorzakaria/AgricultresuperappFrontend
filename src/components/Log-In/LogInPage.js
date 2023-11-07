import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";
import Nav from "../NavBar/Nav";

function Login({ setLoggedInUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/Signin",
        formData
      );

      if (response.data.proceed) {
        setLoggedInUser(response.data.data.UserName);
        localStorage.setItem("jwtToken", response.data.token);
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
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-3">
              <p>Log In with:</p>
            </div>

            <FormInput
              type="text"
              id="loginName"
              name="email"
              label="Email or username"
              value={formData.email}
              onChange={handleInputChange}
            />

            <FormInput
              type="password"
              id="loginPassword"
              name="password"
              label="Password"
              value={formData.password}
              onChange={handleInputChange}
            />

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <div className="button container">
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Log-In
              </button>
            </div>

            <div className="text-center">
              <p>
                Not a member? <a href="/Signup">Sign-Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function FormInput({ type, id, name, label, value, onChange }) {
  return (
    <div className="form-outline mb-4">
      <input
        type={type}
        id={id}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default Login;
