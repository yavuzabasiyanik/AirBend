
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Route } from 'react-router-dom';
import * as spotActions from "../../store/spots";
import IndividualSpotPage from './IndividualSpotPage';
import './SpotPage.css';

const randomNum = num => Math.floor(Math.random() * Math.floor(num) + 1);

const months = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]
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
                        <Link key={e.id} to={`/spots/${e.id}`}>
                            <img className='spotsImage' src={e.img1}></img>
                            <div className='spotsDiv'>
                                <p className='plink'>
                                    {e.city}, {e.state}
                                </p>

                                <p className='plink2'>
                                    ${e.price} / night
                                </p>
                            </div>
                            <div className='spotsDiv'>
                                <p className='lightSpotListPs'>
                                    {randomNum(999)} miles away

                                </p>
                                <p className='lightSpotListPs'>
                                    {months[randomNum(12)]} {randomNum(31)}-{months[randomNum(12)]} {randomNum(31)}
                                </p>
                            </div>
                        </Link>)
                })}
            </div>

            <Route exact path={'/spots/:spotId'}>
                <IndividualSpotPage spots={spotsObj} />
            </Route>
        </div>

    )


}



export default Spots;
