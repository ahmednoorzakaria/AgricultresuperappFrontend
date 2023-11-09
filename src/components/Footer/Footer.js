import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      {/* Grid container */}
      <div className="container p-4 pb-0">
        <form action="">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-auto mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Write Us Your FEEDBACK!</strong>
              </p>
            </div>
            {/*Grid column*/}

            {/*Grid column*/}
            <div className="col-md-5 col-12 mb-4 mb-md-0">
              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="email" id="form5Example25" className="form-control" />
                <label className="form-label" htmlFor="form5Example25"></label>
              </div>
            </div>
            {/*Grid column*/}

            {/*Grid column*/}
            <div className="col-auto mb-4 mb-md-0">
              {/* Submit button */}
              <button type="submit" className="btn btn-primary mb-4">
                Send
              </button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </form>
      </div>
      {/* Grid container */}

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className="text-dark" href="https://github.com/ahmednoorzakaria/AgricultresuperappFrontend">Agriconnect.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
