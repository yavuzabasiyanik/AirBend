import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as bookingActions from "../../store/bookings";
import * as spotActions from "../../store/spots";
import * as reviewActions from '../../store/reviews';
import './ReviewForm.css'

const ReviewForm = () => {

    const { spotId } = useParams();


    const [review, setReviews] = useState('');
    const [rate, setRate] = useState(0);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        dispatch(spotActions.getSpots())

    }, [dispatch]);


    const sessionUser = useSelector((state) => state.session.user);


    const handleSubmit = (e) => {
        e.preventDefault();


        setErrors([]);

        if (rate && (rate > 5 || rate < 0)) {
            setErrors(['Rate should be between 0-5']);
            return;
        }

        if (review?.length > 200 || review?.length === 0) {
            setErrors(['Review length should be between 0-200']);
            return;
        }

        const payload = {

            userId: sessionUser.id,
            spotId: +spotId,
            review,
            rating: rate,
        }

        dispatch(reviewActions.addReviews(payload));


        history.push(`/spots/${spotId}`);

    };


    return (
        <div id="modalLogIn">

            <div className='booking-page-white-div'>
                <NavLink exact to={`/spots/${spotId}`}>
                    <button className="return-to-home">Return to the Listing</button>
                </NavLink>
            </div>
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
                        <button className="login" type="submit">Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )
}


export default ReviewForm;
