
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Route } from 'react-router-dom';
import * as spotActions from "../../store/spots";
import CreateSpotPage from './CreateSpotPage';

import './SpotPage.css';
function Spots() {

    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const spotsObj = useSelector((state) => state.spotReducer.spots);
    const spots = Object.values(spotsObj);

    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])

    return (
        <div className='spots-container'>

            {sessionUser && (<NavLink to='/spots/create'>Create Listing</NavLink>)}

            <div className='spots-alt-container'>

                {spots && spots.map(e => {
                    return (
                        <Link exact to={`/spots/${e.id}`}>
                            <img className='spotsImage' src={e.img1}></img>
                            <div className='spotsDiv'>
                                <p className='plink'>
                                    {e.city}, {e.state}
                                </p>
                                <p className='plink2'>
                                    ${e.price} / night
                                </p>
                            </div>
                        </Link>)
                })}
            </div>
        </div>
    )

}



export default Spots;
