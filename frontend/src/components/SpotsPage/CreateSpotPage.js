import React, { useEffect, useState } from "react";
import * as spotActions from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";


const CreateSpotPage = () => {
    const [name, setNameOfTheHouse] = useState("");
    const [bedNum, setBedNum] = useState(0);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");

    const [price, setPrice] = useState(0);

    const [errors, setErrors] = useState([[]]);

    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])





    const handleSubmit = async (e) => {
        e.preventDefault();



        const payload = {
            address,
            city,
            state,
            country,
            name,
            description,
            bedNum,
            price,
            img1,
            img2,
            img3,
            userId: sessionUser.id,
        };


        setErrors([]);


        let res2 = dispatch(spotActions.createSpot(payload))


        res2.then((e) => {
            if (e.errors) {
                setErrors(e.errors);
            } else {
                history.push('/spots');
            }
        })

    };



    return (
        <div id="modalBecomeAHost">
            <div className='booking-page-white-div-create'>
                <NavLink exact to={'/spots'}>
                    <button className="return-to-home">Return to Listings</button>
                </NavLink>
            </div>
            <div id="modal-content">
                <header className="login">Become A Host</header>

                <form onSubmit={handleSubmit}>
                    <div className="h3-form">

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
                            Main Image
                            <input
                                className="login"
                                type="text"
                                value={img1}
                                onChange={(e) => setImg1(e.target.value)}
                                required
                                placeholder="Enter your image url here."
                            />
                        </label>
                        <label>
                            Side Image
                            <input
                                className="login"
                                type="text"
                                value={img2}
                                onChange={(e) => setImg2(e.target.value)}
                                required
                                placeholder="Enter your image url here."
                            />
                        </label>
                        <label>
                            Side Image
                            <input
                                className="login"
                                type="text"
                                value={img3}
                                onChange={(e) => setImg3(e.target.value)}
                                required
                                placeholder="Enter your image url here."
                            />
                        </label>

                        <ul className="error-container">
                            {errors?.map((error, idx) => {

                                if (typeof error !== 'object') {

                                    return <li key={idx}>{error}</li>
                                } else {
                                    return;
                                }
                            }
                            )}
                        </ul>
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
                        To go back to listings, click <NavLink id="submitButtonInsideOfLogin" exact to='/spots' >
                            Listings.
                        </NavLink>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CreateSpotPage;
