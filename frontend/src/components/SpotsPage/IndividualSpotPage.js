import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as spotActions from "../../store/spots";

import './individual.css';

const IndividualSpotPage = () => {

    const { spotId } = useParams();

    const spotsObj = useSelector((state) => state.spotReducer.spots);
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    // const [reviewNum, setReviewNum] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch]);

    const spots = spotsObj[spotId]



    // useEffect(()=>{

    // },[reviewNum])
    let reviewNum = 0;

    if (spots) {
        spots.Reviews.forEach(e => {
            reviewNum += e.rating
        });
        reviewNum /= spots.Reviews.length
    }




    return (
        <div className="individualBigDiv">
            <div className="individual-page-header">
                <div className="spots-name">
                    <h1>{spots?.name}</h1>
                </div>
                <div className="reviews-and-all-kindsofstuff">
                    <div className="reviews-kindastuff">
                        <img className="star-img" src='https://pngimg.com/uploads/red_star/red_star_PNG35.png'></img>
                        <p>{reviewNum ? Math.round(reviewNum * 100) / 100 : ''}</p>
                        <pre> &middot; </pre>
                        <NavLink to='/spots/reviews'><p className="ozelP">{spots?.Reviews.length} reviews</p></NavLink>
                        <pre> &middot; </pre>
                        <a target="_blank" href="https://www.airbnb.com/help/article/828/about-superhosts"> <o>Superhost</o></a>
                        <pre> &middot; </pre>
                        <p className="greyclasscountrystatecity">{spots?.city},{spots?.state},{spots?.country}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default IndividualSpotPage;
