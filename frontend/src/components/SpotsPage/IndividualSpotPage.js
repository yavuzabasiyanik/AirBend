import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as spotActions from "../../store/spots";
import BookingForm from "./BookingForm";
import Reviews from "./ReviewsPage";
import './individual.css';

const IndividualSpotPage = () => {


    const { spotId } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);



    useEffect(() => {

        dispatch(spotActions.getSpots())

    }, [dispatch]);



    const spotsObj = useSelector((state) => state.spotReducer.spots);
    const sessionUser = useSelector((state) => state.session.user);

    const spots = spotsObj[+spotId]





    let reviewNum = 0;

    if (spots) {
        spots.Reviews.forEach(e => {
            reviewNum += e.rating
        });
        reviewNum /= spots.Reviews.length
    }


    const handleDelete = (e) => {
        e.preventDefault();

        const payload = {
            ...spots
        }
        setErrors([]);

        dispatch(spotActions.deleteSpotThunk(payload)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors)
                    return
                };
            }
        );

        history.push(`/spots`);
    }

    return (
        <>
            <div className='booking-page-white-div'>
                <NavLink exact to={'/spots'}>
                    <button className="return-to-home">Return to Listings</button>
                </NavLink>
            </div>
            <div className="individualBigDiv">
                <div className="individual-page-header">
                    <div className="spots-name">
                        <h1>{spots?.name}</h1>
                    </div>
                    <div className="reviews-and-all-kindsofstuff">
                        <div className="reviews-kindastuff">
                            <div className="reviews-2" >
                                <img className="star-img" src='https://pngimg.com/uploads/red_star/red_star_PNG35.png'></img>
                                <p>{reviewNum ? Math.round(reviewNum * 100) / 100 : '0.00'}</p>
                                <pre> &middot; </pre>
                                <NavLink exact to='/spots/reviews'><p className="ozelP">{spots?.Reviews.length} reviews</p></NavLink>
                                <pre> &middot; </pre>
                                <a target="_blank" href="https://www.airbnb.com/help/article/828/about-superhosts"> <p style={{ fontWeight: "normal", textDecoration: "underline", color: "rgba(0,0,0,0.7)", fontSize: "14px" }}>Superhost</p></a>
                                <pre> &middot; </pre>
                                <p className="greyclasscountrystatecity">{spots?.city},{spots?.state},{spots?.country}</p>
                            </div>
                            {spots?.userId === sessionUser?.id && (

                                <div className="edit-delete-spot-buttons">
                                    <NavLink exact to={`/spots/${spots?.id}/edit`}><button className="spot-button-edit">Edit</button></NavLink>
                                    <button className="spot-button-delete" onClick={(e) => handleDelete(e)}>Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="individual-images">
                    {spots && <img className="bigImg" src={spots?.img1}></img>}
                    {spots && <img className="smallImgs2" src={spots?.img2}></img>}
                    {spots && <img className="smallImgs3" src={spots?.img3}></img>}
                    {/* <img className="bigImg" src={spots?.img1}></img>
                    <img className="smallImgs2" src={spots?.img2}></img>
                    <img className="smallImgs3" src={spots?.img3}></img> */}
                </div>
                <BookingForm />
                <Reviews spotId={+spotId} />

            </div>
        </>
    )
}


export default IndividualSpotPage;
