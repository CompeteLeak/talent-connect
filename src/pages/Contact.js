import React, { useState } from 'react';
import '../Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    training: '',
    motivation: '',
    accomplishment: '',
    headshot: null, // Single headshot
    reel: null, // Single reel
    resume: null, // Single resume
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({
      ...formData,
      [name]: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    console.log([...formDataObj.entries()]);

    try {
      // Send formData to the backend API endpoint for email sending
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        body: formDataObj,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
        console.log(response.status);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>FILL OUT</h2>
      <p>Please fill out the form below and we'll see how we can help you.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name (Required)</label>
          <input type="text" id="firstName" name="firstName" required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="lastName">Last Name (Required)</label>
          <input type="text" id="lastName" name="lastName" required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="email">Email (Required)</label>
          <input type="email" id="email" name="email" required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone (Required)</label>
          <input type="text" id="phone" name="phone" required onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="experience">Years of Experience</label>
          <input type="text" id="experience" name="experience" onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="training">Can you tell us more about your training?</label>
          <textarea id="training" name="training" onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label htmlFor="motivation">What motivates you to make it in this business?</label>
          <textarea id="motivation" name="motivation" onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label htmlFor="accomplishment">What is your greatest accomplishment along your journey?</label>
          <textarea id="accomplishment" name="accomplishment" onChange={handleInputChange}></textarea>
        </div>
        <div>
          <label htmlFor="headshot">Attach Your Headshot</label>
          <input type="file" id="headshot" name="headshot" onChange={handleFileChange} />
          <p>Max. file size: 100 MB.</p>
        </div>
        <div>
          <label htmlFor="reel">Attach Your Reel</label>
          <input type="file" id="reel" name="reel" onChange={handleFileChange} />
          <p>Max. file size: 100 MB.</p>
        </div>
        <div>
          <label htmlFor="resume">Attach Your Resume</label>
          <input type="file" id="resume" name="resume" onChange={handleFileChange} />
          <p>Max. file size: 100 MB.</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
