// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginFormModal";
import Signup from "./components/SignupFormPage";
import Spots from "./components/SpotsPage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Route path='/login'>
        <LoginForm />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/spots'>
        <Spots />
      </Route>


    </>
  );
}

export default App;
