import React, { useState } from "react";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  function registerUser(e) {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name : </label>
        <input
          type="text"
          placeholder="enter your name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <label>Email : </label>
        <input
          type="email"
          placeholder="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password : </label>
        <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
