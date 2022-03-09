import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import * as spotActions from "../../store/spots";
import './BookingForm.css';

const BookingForm = () => {

    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [numGuest, setNumGuest] = useState(0);


    const { spotId } = useParams();

    const sessionUser = useSelector((state) => state.session.user);

    const spotsObj = useSelector((state) => state.spotReducer.spots);
    const history = useHistory();

    // const [reviewNum, setReviewNum] = useState(0);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        dispatch(spotActions.getSpots())

    }, [dispatch]);

    const spot = spotsObj[spotId];

    // console.log(new Date(dateStart) - new Date(2023,6,27));

    // console.log(new Date(2022,3,9) - new Date());


    const handleSubmit = (e) => {

        e.preventDefault();

        setErrors([]);

        spot?.Bookings.forEach((e2) => {

            if(new Date(dateStart)>new Date(dateEnd)){

                setErrors(['Unvalid days']);
            }
        });

        if (spot?.bedNum < numGuest) {

            setErrors(['Please enter a valid guest num']);
            return;
        }

        const payload = {
            userId:sessionUser.id,
            spotId,
            guestNum:numGuest,
            startDate:new Date(dateStart),
            endDate:new Date(dateEnd)
        }


        dispatch(spotActions.createBooking(payload));
    }


    return (
        <div className="bigBookingFormDiv">

            <h1>something</h1>
            <form onSubmit={handleSubmit}>
                <div className="h3-form">
                    <ul>
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>

                    <label>
                        Check-in
                        <input type='date' className="login"
                            onChange={(e) => setDateStart(e.target.value)}
                            value={dateStart}
                            required
                        />
                    </label>
                    <label>
                        Check-out
                        <input type='date' className="login"
                            value={dateEnd}
                            onChange={(e) => setDateEnd(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Guest Number
                        <input type='number' className="login"
                            value={numGuest}
                            onChange={(e) => setNumGuest(e.target.value)}
                            required
                        />
                    </label>
                    <button className="login" type="submit">Booking</button>

                </div>
            </form>

            <div>
                <p></p>
            </div>

        </div>
    )
}


export default BookingForm;
