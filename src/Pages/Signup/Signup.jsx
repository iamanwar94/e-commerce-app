import React from "react";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signup_wrapper">
      <div className="signup_form_wrapper">
        <div className="heading_para">
          <h2>Create an Account</h2>
          <p>
            Creating an account is easy. Just fill out the form below and enjoy
            the benefits of being a registered customer.
          </p>
        </div>
        <div className="signup_form">
          <div className="fname input_wrapper">
            <label htmlFor="fname">First Name*</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div className="lname input_wrapper">
            <label htmlFor="lname">Last Name*</label>
            <input type="text" id="lname" name="lname" />
          </div>
          <div className="email input_wrapper">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="phone input_wrapper">
            <label htmlFor="phone">Phone*</label>
            <input type="phone" id="phone" name="phone" />
          </div>
          <div className="password input_wrapper">
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="age_confirm chex">
            <input type="checkbox" id="age_confirm" name="age_confirm" />
            <label htmlFor="age_confirm">
              I affirm I am 13 years of age or older. CA Residents: I affirm I
              am 18 years of age or older.*
            </label>
          </div>
          <div className="offers chex">
            <input type="checkbox" id="offers" name="offers" />
            <label htmlFor="offers">
              Yes! I'd like to receive emails with special offers and sales
            </label>
          </div>
          <div className="button">
            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
