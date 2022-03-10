
import { useEffect, useState } from 'react';
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
    const [spot, setSpot] = useState();

    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])


    const sessionUser = useSelector((state) => state?.session?.user);
    const spotsObj = useSelector((state) => state?.spotReducer?.spots);
    const spots = Object.values(spotsObj);





    return (
        <div className='spots-container'>
            <div className='booking-page-white-div'>
                <NavLink exact to={'/'}>
                    <button className="return-to-home">Return to Home page</button>
                </NavLink>
            </div>

            <div className='spots-alt-container'>

                {spots && spots.map(e => {
                    return (
                        <Link key={e.id} to={`/spots/${e.id}`}>
                            <p className="name-username">{e?.name} hosted by - <span className="username">{e?.User?.username}</span></p>
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

        </div>

    )


}



export default Spots;
