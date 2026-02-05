"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful");
      console.log("Token:", data.token);
    } else {
      alert(data.message);
    }
  }

  return (
    <div className="flex h-screen ">
      {/* Left Section */}
      <div className="flex-[3] bg-[url('/image.png')] bg-cover bg-center flex">
        <div className="h-screen w-full p-10 flex flex-col">
          {/* Center */}
          <div className="flex-1 flex items-center justify-center">
            <h1
              className="text-8xl font-semibold font-serif text-white text-center"
              style={{
                WebkitTextStroke: "1px black",
              }}
            >
              apnA ReciPe addA
            </h1>
          </div>

          {/* Bottom */}
          <p className="text-xl text-white text-center ">
            “Every recipe tells a story, this one tastes amazing.”
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-[#551d00]  flex items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="bg-[#e87e31]/30 p-8 rounded-lg w-80 backdrop-invert backdrop-opacity-20"
        >
          <h2 className="text-2xl text-white font-semibold mb-4">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full text-orange-200 border p-2 mb-3"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            autoComplete="true"
            placeholder="Password"
            className="w-full border p-2 text-orange-200 mb-4"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#551d00] text-white py-2 rounded hover:bg-[#a74a1a]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
