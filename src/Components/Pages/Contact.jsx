import React from "react";

function Contact() {
  return (
    <div className="p-12 h-screen xs:h-45 flex flex-row xs:flex-col justify-between items-center">
      <div className="w-1/4 xs:w-auto">
        <h2 className="text-6xl font-bold leading-tight lg:text-6xl mb-3">
          Let's talk!
        </h2>
        <div className="dark:text-primary-400 text-2xl">
          Have any question? Let's hear you out
        </div>
      </div>
      <form
        className="space-y-6 w-1/2 xs:w-auto"
      >
        <div className="mt-0 xs:mt-0">
          <label for="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-800 border border-gray-600"
          />
        </div>
        <div>
          <label for="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-gray-800 border border-gray-600"
          />
        </div>
        <div>
          <label for="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-gray-800 border border-gray-600"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 bg-gray-600 dark:text-gray-900 border text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
