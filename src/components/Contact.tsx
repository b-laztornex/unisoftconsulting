import React, { useState } from "react";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting me! I will get back to you soon.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="text-center py-8 bg-gradient-to-r from-blue-500 to-purple-500">
          <h1 className="text-4xl font-extrabold text-white">Contact Me</h1>
          <p className="mt-2 text-lg text-blue-100">
            Feel free to reach out for inquiries or collaborations!
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 p-8 md:p-12 border-r border-gray-200"
          >
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition"
            >
              Send Message
            </button>
          </form>
          {/* Consultation Section */}
          <div className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center bg-blue-50">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Let's Chat
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Schedule a free 30-minute consultation with me to discuss your
              ideas.
            </p>
            <a
              href="https://calendly.com/m-casanova-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg transition"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
