import React from "react";
import "./NavForm.css";
const NavForm = (props) => {
  return (
    <form className="nav-form">
      <div className="inp-group">
        <label htmlFor="name">
          Name: <span>*</span>
        </label> <br />
        <input type="text" name="name" required />
      </div>
      <div className="inp-group">
        <label htmlFor="companyName">
          Company Name: <span>*</span>
        </label> <br />
        <input type="text" name="companyName" required />
      </div>
      <div className="inp-group">
        <label htmlFor="email">
          Email id: <span>*</span>
        </label> <br />
        <input type="email" name="email" required />
      </div>
      <div className="inp-group">
        <label htmlFor="phone">
          Phone Number: <span>*</span>
        </label> <br />
        <input type="number" name="phone" required />
      </div>

      <button>{props.btnTitle}</button>
    </form>
  );
};

export default NavForm;
