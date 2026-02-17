import React, { useState } from "react";

const FormPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    setTimeout(() => {
      onSubmit(formData);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="page-container">
      <h1>📝 Login Form</h1>
      <p>Please fill in your details below</p>

      <form onSubmit={handleSubmit} className="styled-form">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Enter your first name"
            value={formData.firstname}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Enter your last name"
            value={formData.lastname}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Select your country</option>
            <option value="Australia">Australia</option>
            <option value="Botswana">Botswana</option>
            <option value="UK">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="Japan">Japan</option>
            <option value="India">India</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="spinner"></span>
              Submitting...
            </>
          ) : (
            "Submit Information"
          )}
        </button>
      </form>

      <div className="form-footer">
        <p>
          After submitting, you'll be redirected to your personalized home page
        </p>
      </div>
    </div>
  );
};

export default FormPage;
