// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import LoginSignUpButton from './LoginSignUpButton';

function Navigation({ isLoaded }) {
  const [scroll, setScroll] = useState()
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);

  const sessionUser = useSelector(state => state.session.user);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginSignUpButton />
      </>
    );
  }

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 1
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    });

    return () => document.removeEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 1
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    });


  });






  const handleClicking = (e) => {
    e.preventDefault();

    history.push('/')

  }


  return (
    <div className={scroll ? 'headerWhite' : 'header'}>
      {scroll && (<div className='logoiconRed' onClick={(e) => handleClicking(e)} >
        <p>AirBenD</p>
      </div>)
      }
      {!scroll && (<div onClick={(e) => handleClicking(e)} className='logoiconWhite'>
        <p>AirBenD</p>
      </div>)
      }
      <div className='search-div'>


        <input className={!clicked ? "search": 'search-clickled'}
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Start your search"
        />
        <img className='search-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO-KtMrTzRRPDbYRZu8dIs5Gl6cfYCEZ4kA&usqp=CAU"></img>
        <div className={!clicked? 'search-name-container':'search-name-container-clickled'}>

        </div>
      </div>
      {sessionUser && (<NavLink exact to={'/spots/create'}>
        <button className="link-become-a-host">Become a Host</button>
      </NavLink>)}

      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
