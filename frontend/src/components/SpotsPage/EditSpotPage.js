import React, { useEffect, useState } from "react";
import * as spotActions from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";


const EditSpot = () => {



    const { spotId } = useParams();

    const spotsObj = useSelector((state) => state.spotReducer.spots);


    const spots = spotsObj[spotId]

    const [name, setNameOfTheHouse] = useState(spots?.name);
    const [bedNum, setBedNum] = useState(spots?.bedNum);
    const [city, setCity] = useState(spots?.city);
    const [state, setState] = useState(spots?.state);
    const [country, setCountry] = useState(spots?.country);
    const [address, setAddress] = useState(spots?.address);
    const [description, setDescription] = useState(spots?.description);
    const [img1, setImg1] = useState(spots?.img1);
    const [price, setPrice] = useState(spots?.price);
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])

    // useEffect(() => {


    //         setNameOfTheHouse(spots?.name);
    //         setBedNum(spots?.bedNum);
    //         setCity(spots?.city);
    //         setState(spots?.state);
    //         setCountry(spots?.country);
    //         setAddress(spots?.address);
    //         setDescription(spots?.description);
    //         setImg1(spots?.img1);
    //         setPrice(spots?.price);
    // }, [dispatch]);


    const handleSubmit = (e) => {
        e.preventDefault();



        const payload = {
            ...spots,
            address,
            city,
            state,
            country,
            name,
            description,
            bedNum,
            price,
            img1,
        };

        setErrors([]);

        dispatch(spotActions.editSpotThunk(payload)).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) {
                    setErrors(data.errors)
                    return
                };
            }
        );

        history.push(`/spots/${spotId}`);
    };



    return (
        <div id="modalBecomeAHost">
            <div id="modal-content">
                <header className="login">Do you want to change something in house "{spots?.name}" ?</header>

                <form onSubmit={handleSubmit}>
                    <div className="h3-form">
                        <ul>
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>

                        <label>
                            House Name
                            <input className="login"
                                type="text"
                                value={name}
                                onChange={(e) => setNameOfTheHouse(e.target.value)}
                                required
                                placeholder="House Name."

                            />
                        </label>
                        <label>
                            How many Bedrooms?
                            <input
                                className="login"
                                type="number"
                                value={bedNum}
                                onChange={(e) => setBedNum(e.target.value)}
                                required
                                placeholder="Beds."
                            />
                        </label>
                        <label>
                            Enter your city
                            <input
                                className="login"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                placeholder="City."
                            />
                        </label>
                        <label>
                            Enter your state
                            <input
                                className="login"
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                                placeholder="State."
                            />
                        </label>
                        <label>
                            Enter your country
                            <input
                                className="login"
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                placeholder="Country."
                            />
                        </label>
                        <label>
                            Enter your address
                            <input
                                className="login"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                                placeholder="Address pls, dw I won't come after u."
                            />
                        </label>
                        <label>
                            Tell us about your place
                            <input
                                className="login"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                placeholder="Describe your place here."
                            />
                        </label>
                        <label>
                            Enter your price
                            <input
                                className="login"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                                placeholder="Price"
                            />
                        </label>
                        <label>
                            Image
                            <input
                                className="login"
                                type="text"
                                value={img1}
                                onChange={(e) => setImg1(e.target.value)}
                                required
                                placeholder="Enter your image url here."
                            />
                        </label>
                        <button className="login" type="submit">Become a Host</button>

                    </div>
                </form>
                <div id="altbar">
                    <span className="dontHaveAnAccYet">
                        Do you want to learn more about hosting? <a target="_blank" id="submitButtonInsideOfLogin" href='https://www.airbnb.com/help/article/3011/get-help-with-your-listing-from-a-superhost'>
                            Learn more.
                        </a>
                    </span>
                    <span style={{ display: "block" }} className="dontHaveAnAccYet">
                        To go back to listings, click <NavLink id="submitButtonInsideOfLogin" exact to={`/spots/${spotId}`} >
                            Listings.
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default EditSpot;
