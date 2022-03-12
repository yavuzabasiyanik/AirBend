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
import EditSpot from "./components/SpotsPage/EditSpotPage";
import Home from "./components/Home";
import IndividualBookingPage from "./components/SpotsPage/IndividualBooking";
import ReviewForm from "./components/SpotsPage/ReviewForm";
import Profile from "./components/ProfilePage";
import * as userAction from './store/user';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    dispatch(userAction.getUsers());

  }, [dispatch]);




  return (

    <>


      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/login'>
          <LoginForm />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/spots'>
          <Spots />
        </Route>
        <Route exact path='/spots/create'>
          <CreateSpotPage />
        </Route>
        <Route exact path='/spots/:spotId'>
          <IndividualSpotPage />
        </Route>
        <Route exact path='/spots/:spotId/edit'>
          <EditSpot />
        </Route>
        <Route exact path='/bookings/:userId'>
          <IndividualBookingPage />
        </Route>
        <Route exact path='/reviews/create/:spotId'>
          <ReviewForm />
        </Route>
        <Route exact path='/profile/:userId'>
          <Profile />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
