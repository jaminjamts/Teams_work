"use client";

import Link from "next/link";

export default function Page() {
  const handleRegister = async (event) => {};
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-gray-500 rounded-2xl">
        <form
          action=""
          onSubmit={handleRegister}
          className="flex justify-center items-center flex-col gap-3 h-full"
        >
          <input
            type="text"
            name="username"
            placeholder="username"
            className="p-2"
          />
          <input type="text" name="email" placeholder="email" className="p-2" />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="p-2"
          />
          <input
            type="password"
            name="password"
            placeholder="re-password"
            className="p-2"
          />
          <button className="bg-white p-2 rounded-md">signup</button>
          <Link href="/">Login</Link>
        </form>
      </div>
    </main>
  );
}
