
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import * as bookingActions from "../../store/bookings";
import * as spotActions from "../../store/spots";
import './IndividualBookingPage.css';

const IndividualBookingPage = () => {
    const { userId } = useParams();

    const { spotId } = useParams();


    const history = useHistory();

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(spotActions.getSpots())

    }, [dispatch]);

    useEffect(() => {
        dispatch(bookingActions.getBookings())

    }, [dispatch]);


    const sessionUser = useSelector((state) => state.session.user);
    const spotsObj = useSelector((state) => state?.spotReducer?.spots);
    const bookingObj = useSelector((state) => state?.bookingReducer?.bookings);



    const bookings = Object.values(bookingObj)
    const spots = Object.values(spotsObj)
    const spot = spotsObj[spotId];


    bookings?.forEach(e => {
        console.log(e);
    })

    const handleBookingDelete = (elemetn) => {
        elemetn.preventDefault();

        const id = elemetn?.target?.id;




        if (id) {

            dispatch(bookingActions.deleteBooking({ spotId, id }));
        }
    }

    return (
        <div className="bookings-inv-main-div">
            {/* <div className="just-black">

            </div> */}

            <div className='spots-container'>
                <div className='booking-page-white-div'>
                    <NavLink exact to={'/'}>
                        <button className="return-to-home">Return to Home page</button>
                    </NavLink>
                </div>

                <div className='spots-alt-container'>

                    {bookings && bookings.map(e => {
                        if (e.userId === +userId) {

                            return (
                                <div className="positionrelative">
                                    <Link key={e.id} to={`/spots/${e.spotId}`}>
                                        <p className="name-username">{e.Spot?.name} hosted by - <span className="username">{e.Spot?.User?.username}</span></p>
                                        <img className='spotsImage' alt="" src={e.Spot?.img1}></img>
                                        <div className='spotsDiv'>
                                            <p className='plink2'>
                                                {new Date(e.startDate).toLocaleDateString('en-US')}<span className="to"> to </span>{new Date(e.endDate).toLocaleDateString('en-US')}
                                            </p>
                                            -
                                            <p className='plink2'>
                                                ${e.Spot.price} / night
                                            </p>
                                        </div>
                                    </Link>
                                    <button onClick={(e3) => handleBookingDelete(e3)} className="booking-button-delete" >Delete</button>

                                </div>

                            )

                        }
                    })}
                </div>

            </div>
        </div>
    )

}

export default IndividualBookingPage
