import React from 'react';
import { Link } from 'react-router-dom';
import "./profile.css"

const Profile = () => {
  return (
    <div className="profile-wrapper" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <section className="vh-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                  </div>

                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                  </div>

                  <button className="btn btn-primary btn-lg btn-block custom-button" type="submit">Login</button>

                  <hr className="my-4" />

                  <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
