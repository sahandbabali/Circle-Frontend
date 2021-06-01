import React, { useState } from "react";

const Register = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h2>Register</h2>

        <div class="mb-3">
          <label htmlFor="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={onChange}
            aria-describedby="name"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            value={user.email}
            onChange={onChange}
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="password1" class="form-label">
            Password
          </label>
          <input
            value={user.password}
            onChange={onChange}
            type="password"
            class="form-control"
            id="password1"
            name="password"
          />
        </div>

        <div class="mb-3">
          <label htmlFor="exampleInputPassword2" class="form-label">
            Confirm Password
          </label>
          <input
            value={user.password2}
            onChange={onChange}
            type="password"
            class="form-control"
            id="password2"
            name="password2"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Register User
        </button>
      </form>
    </div>
  );
};

export default Register;
