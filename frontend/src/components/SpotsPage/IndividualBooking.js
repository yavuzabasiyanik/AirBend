
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory, useParams } from "react-router-dom";
import * as bookingActions from "../../store/bookings";
import * as spotActions from "../../store/spots";
import './IndividualBookingPage.css';
import Footer from "../Footer";
const IndividualBookingPage = () => {
    const { userId } = useParams();

    const [bookingDeleteModal, setBookingDeleteModal] = useState([false,-1]);

    const history = useHistory();

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(spotActions.getSpots());

    }, [dispatch]);

    useEffect(() => {
        dispatch(bookingActions.getBookings());

    }, [dispatch]);

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])

    const sessionUser = useSelector((state) => state.session.user);
    const bookingObj = useSelector((state) => state?.bookingReducer?.bookings);



    const bookings = Object.values(bookingObj)


    let menuRef = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (!menuRef?.current?.contains(event.target)) {

                setBookingDeleteModal([false, -1]);
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    const handleBookingDelete = (elemetn,id) => {
        elemetn.preventDefault();

        // const id = elemetn?.target?.id;


        if (id) {

            dispatch(bookingActions.deleteBooking({ id }));
        }
        setBookingDeleteModal([false,-1])
    }


    const handleReviewForm = (element) => {
        element.preventDefault();

        history.push(`/reviews/create/${element?.target?.id}`);
    }



    return (

        <div className="bookings-inv-main-div">

            <div className='booking-page-white-div'>

                <NavLink exact to={'/'}>
                    <button className="return-to-home">Return to Home page</button>
                </NavLink>
            </div>

            <div className='spots-container'>
                <h1 className='spots-h1'>Your Bookings</h1>

                <div className='spots-alt-container'>

                    {bookings && bookings.map(e => {
                        if (e.userId === +userId) {

                            return (
                                <div key={e.id} className="positionrelative">
                                    <Link key={e.id} to={`/spots/${+e?.spotId}`}>
                                        <p className="name-username">{e?.Spot?.name}</p>
                                        <img className='spotsImage2' alt="" src={e.Spot?.img1}></img>
                                        <div className='spotsDiv'>
                                            <p className='plink2'>
                                                {new Date(e?.startDate).toLocaleDateString('en-US')}<span className="to"> to </span>{new Date(e.endDate).toLocaleDateString('en-US')}
                                            </p>
                                            -
                                            <p className='plink2'>
                                                ${e?.Spot?.price} / night
                                            </p>
                                        </div>
                                    </Link>
                                    <button id={e.id} onClick={() => setBookingDeleteModal([true,e?.id])} className="booking-button-delete" >Delete</button>
                                    <button id={e.spotId} onClick={(e3) => handleReviewForm(e3)} className="booking-button-rate" >Rate</button>
                                </div>

                            )

                        }
                    })}
                </div>

                <Footer />
            </div>
            {bookingDeleteModal[0] &&
            (
                <div className='background-modal'>
                <div ref={menuRef} className="modal-container-edit-delete-post-modal">
                    <div className="areYouSureYouwannaDelete" >
                        <div className='pareyousure'>
                            <p className='deletePostA'>Delete Booking?</p>
                            <p className='areyousuredeletepost'>Are you sure you want to delete this booking?</p>
                        </div>
                        <div onClick={(e) => handleBookingDelete(e, bookingDeleteModal[1])} className="yes">
                            {/* edit-delete-post-modal-divs navlink-delete */}
                            <button  className="navlink-delete">Yes</button>
                        </div>
                        <div className="edit-delete-post-modal-divs" onClick={() => setBookingDeleteModal([false,-1])}>
                            Cancel
                        </div>
                    </div>
                </div>
            </div>
            )
            }

        </div>
    )

}

export default IndividualBookingPage
