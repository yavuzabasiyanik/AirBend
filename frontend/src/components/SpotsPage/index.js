
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';
import * as spotActions from "../../store/spots";
import CreateSpotPage from './CreateSpotPage';

import './SpotPage.css';
function Spots() {

    const dispatch = useDispatch();

    const sessionUser =  useSelector((state)=> state.session.user);
    const spotsObj  = useSelector((state) => state.spotReducer.spots);
    const spots = Object.values(spotsObj);

    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])

    return (
        <div className='spots-container'>

            {sessionUser && (<NavLink to='/spots/create'>Create Listing</NavLink>)}

            {spots && spots.map(e => {
                return (<p>
                    {e.address} {e.city} {e.name} {e.description}
                </p>)
            })}
        </div>
    )

}



export default Spots;
