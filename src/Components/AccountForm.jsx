import React, { useState } from 'react';
import './AccountForm.css';

const AccountForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <div className="user-name">Raj Jaiswal</div>

        <div className="search-bar glass">
        <input type="text" placeholder="Search..." className='search-input'/>
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <h2>Account Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="form-row">
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountForm;
