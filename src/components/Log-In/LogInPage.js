import React from "react";
import './/LogInPage.css'

function Login() {
  return (
    <div>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form>
            <div className="text-center mb-3">
              <p>Log In with:</p>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="loginName" className="form-control" />
              <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="loginPassword" className="form-control" />
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
