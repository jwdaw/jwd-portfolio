import { useState } from "react";

export default function CForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e5732dad-8da5-44d0-a69a-0f51c93f03c9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={5}
            className="w-full px-4 py-2 bg-dark-700 border border-dark-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            placeholder="What's on your mind?"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
      {result && (
        <p className="mt-4 text-center text-sm text-accent-light">{result}</p>
      )}
    </div>
  );
}
