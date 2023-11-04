import React from "react";
import './/SignUpPage.css'

function Signup() {
  return (
    <div>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-signup" role="tabpanel" aria-labelledby="tab-signup">
          <form>
            <div class="text-center mb-3">
              <p>Sign Up with:</p>
            </div>

            <div class="form-outline mb-4">
              <input type="text" id="registerName" class="form-control" />
              <label class="form-label" for="registerName">Name</label>
            </div>

            <div class="form-outline mb-4">
              <input type="text" id="registerUsername" class="form-control" />
              <label class="form-label" for="registerUsername">Username</label>
            </div>

            <div class="form-outline mb-4">
              <input type="text" id="registerBio" class="form-control" />
              <label class="form-label" for="registerBio">Bio</label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="registerEmail" class="form-control" />
              <label class="form-label" for="registerEmail">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="registerPassword" class="form-control" />
              <label class="form-label" for="registerPassword">Password</label>
            </div>

            <div class="form-outline mb-4">
              <input type="password" id="registerRepeatPassword" class="form-control" />
              <label class="form-label" for="registerRepeatPassword">Confirm password</label>
            </div>

            <div class="form-check d-flex justify-content-center mb-4">
              <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                aria-describedby="registerCheckHelpText" />
              <label class="form-check-label" for="registerCheck">
                I have read and agreed to the terms
              </label>
            </div>

            <div>
              <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
            </div>

            <div className="text-center">
              <p>Already a member? <a href="/Login">Log-In</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;