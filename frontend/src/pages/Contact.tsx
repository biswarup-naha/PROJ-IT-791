import React from "react";
import { useNavigate } from "react-router-dom";
import { MailIcon, GithubIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 text-gray-800 flex flex-col">

      {/* Header */}
      <header className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-md">
          Contact & Contributors
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-600">
          Have a question or want to reach out to the project contributors?
        </p>
      </header>
     {/* Contributors Section */}
      <section className="mt-16 mb-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">👥 Project Contributors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-blue-900">
          {[
            "Biswarup Naha",
            "Dona Murmu",
            "Sourav Karmakar",
            "Avanish",
            "Hemdatta Das",
          ].map((name) => (
            <div
              key={name}
              className="bg-white/70 border border-blue-100 rounded-xl shadow-md py-6 px-4 hover:scale-105 transition"
            >
              <UserIcon className="mx-auto mb-2 text-blue-600" />
              <p className="font-semibold">{name}</p>
            </div>
          ))}
          <div className="md:col-span-3 text-center mt-6 text-blue-600 font-semibold">
            Guided by: Mrs. Nabanita Das
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="text-center mb-12">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition font-medium shadow"
        >
          ⬅ Back to Home
        </button>
      </div>
      {/* Contact Form */}
      <section className="py-12 bg-white/60 backdrop-blur-md rounded-xl shadow-xl border border-blue-100 w-full max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-800 text-center">Send a Message</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
            <textarea
              rows={5}
              className="w-full border rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition font-semibold shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

    </div>
  );
};

export default Contact;
