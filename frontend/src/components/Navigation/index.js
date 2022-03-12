// frontend/src/components/Navigation/index.js
import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import * as spotActions from "../../store/spots";
import LoginSignUpButton from './LoginSignUpButton';

function Navigation({ isLoaded }) {
  const [scroll, setScroll] = useState()
  const history = useHistory();
  const [filterData, setFilter] = useState([]);
  const [search, setSearch] = useState('');

  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(spotActions.getSpots())
  }, [dispatch])


  const spotsObj = useSelector((state) => state.spotReducer.spots);

  const spots = Object.values(spotsObj);








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



  const handleFilter =(e) =>{
    const search = e.target.value


    const newFilter = spots.filter((val)=>{
        return val?.name.toLowerCase().includes(search?.toLowerCase());
    })


    setSearch(search)
    if(search ===''){
      setFilter([]);
    }else{
      setFilter(newFilter);
    }


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


        <input className={filterData?.length ==0 ? "search" : 'search-clickled'}
          type="search"
          onChange={handleFilter}
          placeholder="Start your search"
          value={search}
        />
        <img className='search-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaO-KtMrTzRRPDbYRZu8dIs5Gl6cfYCEZ4kA&usqp=CAU"></img>
          <div className={filterData?.length ==0?'search-name-container':'search-name-container-clickled'}>
            {filterData?.slice(0,10).map((value, key) => {
              return <NavLink key={key} exact to={`/spots/${value.id}`}><div className='dataItem' onClick={(e)=> setSearch(value.name)} key={key}>{value.name}</div></NavLink>
            })}
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
