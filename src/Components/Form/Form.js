import React from 'react'
import "./Form.css"
const Form = () => {
  return (
    <form className='all-form'>
      <h2>REQUEST A QUOTE</h2>
      <h5>ITS FAST, EASY & FREE</h5>
      <div className="form-cont">
        <input type="text" placeholder="Name" name="Name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="tel" placeholder="Phone" />
        <input type="text" placeholder="Service you want " />
        <input type="text" placeholder="Budget /month" />
        <button className="btn">Get Estimate</button>
      </div>
    </form>
  );
}

export default Form