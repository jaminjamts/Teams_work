"use client";

export default function Home() {
  const handleOnSubmit = async (event) => {
    const BACKEND_ENDPOINT = "http://localhost:8888/sign-in";

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
    console.log(data);
  };
  return (
    <div>
      <h1>FS file works</h1>
      <form action="" onSubmit={handleOnSubmit}>
        <input className="border" type="text" name="name" />
        <input className="border" type="password" name="password" />
        <button className="btn">log in user</button>
      </form>
    </div>
  );
}
