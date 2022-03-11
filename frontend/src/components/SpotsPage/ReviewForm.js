import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as bookingActions from "../../store/bookings";
import * as spotActions from "../../store/spots";

import './ReviewForm.css'

const ReviewForm = () => {

    const { spotId } = useParams();

    console.log(+spotId);

    const [review, setReviews] = useState('');
    const [rate, setRate] = useState(0);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        dispatch(spotActions.getSpots())

    }, [dispatch]);



    const handleSubmit = (e) => {
        e.preventDefault();

    };


    return (
        <div id="modalLogIn">
            <div id="modal-content">
                <header className="login">Your review</header>

                <form onSubmit={handleSubmit}>
                    <div className="h3-form">
                        <ul className="error-container">
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>

                        <label>
                            Review
                            <input className="login"
                                type="text"
                                value={review}
                                onChange={(e) => setReviews(e.target.value)}
                                required
                                placeholder="Write about your experience."

                            />
                        </label>
                        <label>
                            Rating
                            <input
                                className="login"
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                required
                            />
                        </label>
                        <button className="login" type="submit">Log In</button>

                    </div>
                </form>
            </div>
        </div>
    )
}


export default ReviewForm;
