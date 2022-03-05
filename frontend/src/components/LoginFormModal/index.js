// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import './LoginForm.css'




function LoginForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };




  return (
    <div id="modal">
      <div id="modal-content">
        <header className="login">Log in</header>

        <form onSubmit={handleSubmit}>
          <div className="h3-form">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>

            <label>
              Username or Email
              <input className="login"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder="Username or Email"

              />
            </label>
            <label>
              Password
              <input
                className="login"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </label>
            <button className="login" type="submit">Log In</button>

          </div>
        </form>
        <div id="altbar">
          <span className="dontHaveAnAccYet">
            Don't have an account yet? Sign Up <NavLink id="submitButtonInsideOfLogin" to='/signup'>
              here.
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
