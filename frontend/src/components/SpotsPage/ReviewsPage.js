
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import * as bookingActions from "../../store/bookings";
import * as spotActions from "../../store/spots";
import * as reviewActions from '../../store/reviews';
import './Reviews.css'



function Reviews({ spotId }) {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])

    useEffect(() => {
        dispatch(bookingActions.getBookings())
    }, [dispatch])


    useEffect(() => {
        dispatch(reviewActions.getReviews())
    }, [dispatch])

    const sessionUser = useSelector((state) => state.session.user);

    const bookingObj = useSelector((state) => state?.bookingReducer?.bookings);
    const bookings = Object.values(bookingObj)


    const reviewsObj = useSelector(state => state?.reviewReducer?.reviews);

    const reviews = Object.values(reviewsObj);

    const handleReviewDelete = (e) =>{
        e.preventDefault();

        dispatch(reviewActions.deleteReview(+e.target.id));
    }

    return (

        <div className="reviews-daddy-div">
            <div className='reviews-medium-div'>
                <div className='reviews-small-div'>

                    <div className='grid-div-reviews'>
                        {reviews?.map((ele) => {
                            if (ele?.spotId === spotId) {
                                return (
                                    <div className="daddy-div-of-reviews" key={ele.id}>
                                        <div className="reviews-img-username">
                                            <div className="something-not">
                                                {ele?.User?.profileUrl ? (<img className="image-reviews-profile" src={ele?.User?.profileUrl}></img>)
                                                    :
                                                    (<img className="image-reviews-profile" src={'https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg'} alt=''></img>)
                                                }
                                                <p className="ele-username">{ele?.User?.username}</p>
                                            </div>

                                            {sessionUser?.id===ele?.userId && (<button className="review-button-delete" id={ele.id} onClick={(e)=> handleReviewDelete(e)} >Delete</button>)}


                                        </div>
                                        <div>
                                            <p className='ele-review-main'>
                                                {ele?.review}
                                            </p>
                                        </div>

                                    </div>)
                            }
                        })}



                    </div>
                </div>
            </div>

        </div>
    )

}
export default Reviews;
