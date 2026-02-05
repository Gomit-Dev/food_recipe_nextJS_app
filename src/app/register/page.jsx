"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      // ✅ Redirect to login page after successful register
      router.push("/login");
    } else {
      alert(data.message || "Registration failed");
    }
  }

  return (
    <div className=" flex justify-between w-[100vw] h-[100vh] bg-[#551d00] px-20 pt-20 text-white">
      <div className="w-[50vw] bg-white mb-20"></div>

      <div className=" w-[30vw] p-20 hover-3d">
        <div className="bg-[#a74a1a] py-20 px-10  rounded-2xl">
          <h1 className="text-center pb-5 text-2xl text-[#551d00]">Register here</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              className="text-white border-2 rounded-xl px-5"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              className="text-white border-2 bg- rounded-xl px-5"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <button type="submit" disabled={loading} className=" rounded-2xl px-10 py-1 text-center align-center bg-[#551d00]">
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
