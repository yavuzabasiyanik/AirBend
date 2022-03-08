// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginFormModal";
import Signup from "./components/SignupFormPage";
import Spots from "./components/SpotsPage";
import CreateSpotPage from "./components/SpotsPage/CreateSpotPage";
import IndividualSpotPage from "./components/SpotsPage/IndividualSpotPage";
import Home from "./components/Home";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/spots'>
          <Spots />
        </Route>
        <Route path='/spots/create'>
          <CreateSpotPage />
        </Route>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path='/spots/:spotId'>
          <IndividualSpotPage />
        </Route>
      </Switch>


    </>
  );
}

export default App;
