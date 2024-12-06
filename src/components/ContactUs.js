import React from "react";

function ContactUs() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-2xl p-4 mb-8">This is ContactUs</h1>

      <form className="w-full max-w-md p-4 border-2 border-gray-300 rounded-md shadow-md bg-white">
     

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            className="w-full h-[40px] p-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 caret-black"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-[80px] p-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600 caret-black resize-none"
            placeholder="Write your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-2 border-black border-2 rounded-md h-[45px] bg-orange-600 text-white hover:bg-orange-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
