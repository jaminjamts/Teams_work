"use client";

import Link from "next/link";

export default function Home() {
  const BACKEND_ENDPOINT = "http://localhost:9999";

  const handleBtn = async (event) => {
    event.preventDefault();

    const userData = {
      name: event.target.name.value,
      password: event.target.password.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(BACKEND_ENDPOINT, options);
    const data = await response.json();
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2">
        <form action="" onSubmit={handleBtn} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            className="border"
            placeholder="username"
          />

          <input
            type="password"
            name="password"
            className="border"
            placeholder="password"
          />
          <button className="bg-gray-400 rounded-xl">button</button>
        </form>
        <div>
          <Link href="/register">sign-up</Link>
        </div>
      </div>
    </main>
  );
}
