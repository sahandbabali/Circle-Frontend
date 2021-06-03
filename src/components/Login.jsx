import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/AlertContext";
import AuthContext from "../context/auth/AuthContext";

const Login = (props) => {
  const alertcontext = useContext(AlertContext);
  const authcontext = useContext(AuthContext);

  const { setalert } = alertcontext;
  const { loginuser, error, clearerrors, isAuthenticated } = authcontext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("./");
    }

    if (error) {
      alertcontext.setalert(error, "Invalid credentials");
      clearerrors();
    }
  }, [error, isAuthenticated, props.history]);

  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alertcontext.setalert("Please enter all fields", "warning");
    } else {
      loginuser(user);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {" "}
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

        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
