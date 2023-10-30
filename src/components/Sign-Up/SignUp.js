import React from 'react';

const SignUp = () => {
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