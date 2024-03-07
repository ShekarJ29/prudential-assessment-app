import React, { useState } from 'react';
import './AddCandidate.css'

export default function AddCandidate() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailId:'',
        phoneNo:'',
        address:''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // You can handle form submission here
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    return (
    <div className="my-form-container">
        <h2>Candidate Form</h2>
        <form onSubmit={handleSubmit} className="my-form">
        <div className="my-form-group">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="my-form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="my-form-group">
          <label htmlFor="emailId">Email:</label>
          <input 
            type="text" 
            id="emailId" 
            name="emailId" 
            value={formData.emailId} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="my-form-group">
          <label htmlFor="phoneNo">Phone No:</label>
          <input 
            type="text" 
            id="phoneNo" 
            name="phoneNo" 
            value={formData.phoneNo} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="my-form-group">
          <label htmlFor="address">Address:</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
        </form>
        </div>
  );
    }