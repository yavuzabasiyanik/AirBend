import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as bookingActions from "../../store/bookings";
import * as spotActions from "../../store/spots";

import './BookingForm.css';

const BookingForm = () => {

    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [numGuest, setNumGuest] = useState(0);


    const { spotId } = useParams();


    const history = useHistory();

    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        dispatch(spotActions.getSpots())

    }, [dispatch]);

    useEffect(() => {
        dispatch(bookingActions.getBookings())

    }, [dispatch]);


    const sessionUser = useSelector((state) => state.session.user);
    const spotsObj = useSelector((state) => state?.spotReducer?.spots);
    const bookingObj = useSelector((state) => state?.bookingReducer?.bookings);


    useEffect(() => {

    }, [bookingObj])



    const bookings = Object.values(bookingObj)
    const spot = spotsObj[spotId];

    const handleSubmit = (e) => {

        e.preventDefault();

        setErrors([]);

        spot?.Bookings.forEach((e2) => {

            if (new Date(dateStart) > new Date(dateEnd)) {

                setErrors(['Unvalid days']);
            }
        });

        if (spot?.bedNum < numGuest) {

            setErrors(['Please enter a valid guest num']);
            return;
        }

        const payload = {
            userId: sessionUser.id,
            spotId,
            guestNum: numGuest,
            startDate: new Date(dateStart),
            endDate: new Date(dateEnd)
        }


        dispatch(bookingActions.createBooking(payload));
    }

    const handleBookingDelete = (elemetn) => {
        elemetn.preventDefault();

        const id = elemetn.target.id;


        if (id) {

            dispatch(bookingActions.deleteBooking({ spotId, id }));
        }
    }
    // console.log(spot.User);

    return (
        <div className="bigBookingFormDiv">
            <div className="medium-div-form-div">
                <div className="dady-info-about-the-house">
                    <div className="info-about-the-house">

                        <div className="child-info-about-the-house">
                            <h2>{`Hosted by ${spot?.User?.username}`}</h2>
                            <p>{spot?.bedNum} guests.</p>
                            <p>{spot?.description}</p>
                        </div>
                        <img src={`${spot?.User?.profileUrl}`}></img>

                    </div>
                    <div className="form-individual-page">


                        <form onSubmit={handleSubmit}>
                            <div className="inside-of-the-form">
                                <div className="errors-cotainer">
                                    <p className='plink2'>
                                        ${spot?.price} / night
                                    </p>
                                    <ul>
                                        {errors.map((error, idx) => (
                                            <li key={idx}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="something-i-guess-i-forogt-lol">
                                    <div className="checkincheckout">

                                        <label>
                                            Check-in
                                            <input type='date' className=""
                                                onChange={(e) => setDateStart(e.target.value)}
                                                value={dateStart}
                                                required
                                            />
                                        </label>
                                        <label>
                                            Check-out
                                            <input type='date' className=""
                                                value={dateEnd}
                                                onChange={(e) => setDateEnd(e.target.value)}
                                                required
                                            />
                                        </label>
                                    </div>
                                    <div className="guest-number-div">

                                        <label>
                                            Guest Number
                                            <input type='number' className=""
                                                value={numGuest}
                                                onChange={(e) => setNumGuest(e.target.value)}
                                                placeholder="asdas"
                                                required
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="form-button">

                                    <button className="" type="submit">Check availability</button>
                                </div>

                            </div>
                        </form>

                    </div>

                    <div>
                        <ul>
                            {bookings?.map(e => {
                                if (+e.spotId === +spotId) {

                                    return <button type="submit" key={e.id} onClick={(e3) => handleBookingDelete(e3)}><li id={e.id} key={e.id}>{e.startDate}</li> </button>;
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default BookingForm;
