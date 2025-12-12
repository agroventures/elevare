import axios from "axios";
import React, { useState } from "react";

export default function TestBackend() {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/test/", {
        name: name,
      });
      console.log("Sent:", name);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2>Testing</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 rounded-xl focus:ring-2 focus:ring-accent border border-gray-300 shadow-sm px-4"
            placeholder="Name"
          />
        </div>

        <button
          type="submit"
          className="w-48 h-12 bg-accent text-lg font-semibold rounded-xl shadow-lg hover:bg-accent/80 transition-all duration-200 cursor-pointer mt-4"
        >
          Send
        </button>
      </form>
    </div>
  );
}
