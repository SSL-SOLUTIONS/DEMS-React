import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const baseURL = "http://localhost:8080";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsSubmitting(true);

    try {
      const response = await fetch(`${baseURL}/contact/submitForm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form data
        setFormData({
          Name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
        });
        setTimeout(() => {
          setIsLoading(false);
          setIsSubmitting(false);
          navigate("/thank-you");
        }, 2000);
      } else {
        console.error("Failed to submit form");
        setIsLoading(false);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        className="all-form"
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2>REQUEST A QUOTE</h2>
        <h5>IT'S FAST, EASY & FREE</h5>
        <div className="form-cont">
          <input
            type="text"
            placeholder="Name"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Service you want"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Budget /month"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className={`btn ${isLoading ? "loading" : ""}`}
            disabled={isSubmitting}
          >
            {isLoading ? "Loading..." : "Get Estimate"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
