// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import Signup from '../SignupFormPage/SignUpForm'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);


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

  const handleSubmit2 = (e) => {
    e.preventDefault();

    setShowModal(true)
  }


  return (
    <div>
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
          Don't have an account yet? Sign Up <span id="submitButtonInsideOfLogin" onClick={(e) => handleSubmit2(e)}>
            here.
          </span>
        </span>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <Signup />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
