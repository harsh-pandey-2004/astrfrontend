import React, { useState } from 'react';
import axios from 'axios';

const MailPage = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await axios.post('/api/send-email', emailData);
    //   alert('Email sent successfully');
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   alert('Failed to send email');
    // }
  };

  return (
    <div className='w-full h-screen py-4 bg-gray-800 overflow-y-auto'>
      <div className="w-full max-w-md mx-auto mt-16 p-6 bg-yellow-400 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 w-full">Send Email</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">To:</label>
            <input
              type="email"
              name="to"
              value={emailData.to}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subject:</label>
            <input
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message:</label>
            <textarea
              name="message"
              value={emailData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-black text-white rounded hover:bg-blue-600"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default MailPage;
