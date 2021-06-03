import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/AlertContext";
import AuthContext from "../context/auth/AuthContext";

const Register = () => {
  const alertcontext = useContext(AlertContext);
  const authcontext = useContext(AuthContext);

  useEffect(() => {
    if (authcontext.error) {
      alertcontext.setalert(authcontext.error, "danger");
      authcontext.clearerrors();
    }
  }, [authcontext.error]);
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
    if (
      user.name === "" ||
      user.email === "" ||
      user.password === "" ||
      user.password2 === ""
    ) {
      alertcontext.setalert("Please enter all fields", "warning");
    } else {
      authcontext.register(user);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {" "}
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
                minLength="6"
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
                minLength="6"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Register User
            </button>
          </form>
        </div>

        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Register;
