// frontend/src/components/SignupFormPage/index.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './Signup.css';

function Signup() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);

      if (profileImg === "") {

        return dispatch(sessionActions.signup({ email, username, password, profileImg: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      } else {
        return dispatch(sessionActions.signup({ email, username, password, profileImg }))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
      }

    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };



  const cookieFunctionDemo = (e) => {
    e.preventDefault();

    dispatch(sessionActions.login({ credential: 'sifuhotman', password: 'password' }))

  }



  return (
    <div id="modalSignUp">
      <div id="modal-content">
        <header className="signup">Sign Up</header>
        <form onSubmit={handleSubmit}>
          <div className="h3-form">

            <ul className="error-container">
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
            <label>
              Email
              <input
                className="signup"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
              />
            </label>
            <label>
              Username
              <input
                className="signup"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Username"
              />
            </label>
            <label>
              Profile Image
              <input
                className="signup"
                type="text"
                accept="image/png, image/jpeg"
                value={profileImg}
                onChange={(e) => setProfileImg(e.target.value)}
                placeholder="Profile Url"
              />
            </label>
            <label>
              Password
              <input
                className="signup"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </label>
            <label>
              Confirm Password
              <input
                className="signup"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm Password"
              />
            </label>
            <button className="signup" type="submit">Sign Up</button>
          </div>
        </form>
        <div id="altbarSignup">
          <span className="dontHaveAnAccYet">
            Have an account already? Log In <NavLink id="logingbuttoninsideofsignup" to='/login'>
              here.
            </NavLink>
          </span>

        </div>
        <span className="dontHaveAnAccYet">
        Don't have time to sign-up? Here, click <span className="demo-cookie" onClick={(e) => cookieFunctionDemo(e)}>this</span> to login as the Demo user
        </span>
      </div>
    </div>


  );
}

export default Signup;
