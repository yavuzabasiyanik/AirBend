import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Route } from 'react-router-dom';
import * as spotActions from "../../store/spots";
import './SpotPage.css';
import Footer from '../Footer';

function Spots() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])


    const sessionUser = useSelector((state) => state?.session?.user);
    const spotsObj = useSelector((state) => state?.spotReducer?.spots);
    const spots = Object.values(spotsObj);




    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])



    return (
        <div className='spots-container'>
            <div className='booking-page-white-div'>
                <div className='div-between-nav-and-spots'>
                    <NavLink exact to={'/'}>
                        <button className="return-to-home">Return to Home page</button>
                    </NavLink>
                </div>

            </div>
            <h1 className='spots-h1'>Discover AirBenD Experiences</h1>
            <div className='spots-alt-container'>
                {spots && spots.map(e => {

                    return (
                        <Link key={e.id} to={`/spots/${+
                            e.id}`}>
                            <img className='spotsImage' src={e?.img1}></img>
                            <div className='spotsDiv'>
                                <p className='plink2'>
                                    {e?.city}, {e?.state}
                                </p>

                                <p className='plink2'>
                                    ${e?.price} / night
                                </p>
                            </div>

                        </Link>)
                })}
            </div>
            <Footer />


        </div>

    )


}



export default Spots;
