import React, { useState } from "react";
import Footer from "../components/Footer";

const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookTitle: "",
    author: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., sending to backend API)
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      bookTitle: "",
      author: "",
      message: "",
    });
  };

  return (
    <>
      <div className="w-full min-h-[calc(100vh-60px)] mt-[60px]  flex flex-col items-center p-6 backdrop-blur-sm">
        <h1 className="mb-8 text-3xl font-bold text-white">Request a Book</h1>
        {submitted && (
          <div className="p-4 mb-6 text-white bg-green-500 rounded-md">
            Your request has been submitted successfully!
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg"
        >
          {/* Name Field */}
          <label htmlFor="name" className="mb-2 text-white">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Email Field */}
          <label htmlFor="email" className="mb-2 text-white">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Book Title Field */}
          <label htmlFor="bookTitle" className="mb-2 text-white">
            Book Title
          </label>
          <input
            type="text"
            id="bookTitle"
            name="bookTitle"
            placeholder="Enter the book title"
            value={formData.bookTitle}
            onChange={handleChange}
            className="w-full p-3 mb-4 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Author Field */}
          <label htmlFor="author" className="mb-2 text-white">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter the author name"
            value={formData.author}
            onChange={handleChange}
            className="w-full p-3 mb-4 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message Field */}
          <label htmlFor="message" className="mb-2 text-white">
            Additional Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Provide any additional information..."
            value={formData.message}
            onChange={handleChange}
            className="w-full h-24 p-3 mb-6 text-black rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Request;
