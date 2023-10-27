import React from "react";
import { Link } from "react-router-dom";
import UserProfileForm from "../components/UserProfileForm"

const SignUp = () => {
  const userProfileData = {
    first_name: "",
    last_name: "",
    username: "",
    bio: "",
    profile_picture: "src/images/farmer.png",
    email: "",
    password: "",
    confirm_password: "",
  };
  return (
    <div className="signup">
      <section className="form-section">
        <h2 className="signup-title">Create an account</h2>
        <UserProfileForm userProfileData={userProfileData} />
        <span className="signup-login">
          Do you have an account? <Link to="/"> Login</Link>{" "}
        </span>
      </section>
    </div>
  );
};

export default SignUp;
