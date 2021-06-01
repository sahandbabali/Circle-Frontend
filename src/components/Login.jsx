import React, { useState } from "react";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("login submited");
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h2>Login</h2>

        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            name="email"
            value={user.email}
            onChange={onChange}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="password" class="form-label">
            Password
          </label>
          <input
            name="password"
            value={user.password}
            onChange={onChange}
            type="password"
            class="form-control"
            id="password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login User
        </button>
      </form>
    </div>
  );
};

export default Login;
