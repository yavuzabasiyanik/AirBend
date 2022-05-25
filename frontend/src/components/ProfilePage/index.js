
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import * as bookingActions from "../../store/bookings";
import * as spotActions from "../../store/spots";
import * as reviewActions from '../../store/reviews';
import './Profile.css';
import Footer from '../Footer';

const Profile = () => {

    const { userId } = useParams();

    const dispatch = useDispatch();


    const usersObj = useSelector(state => state?.userReducer?.users);

    const users = Object.values(usersObj)

    const user = usersObj[userId];



    useEffect(() => {
        dispatch(spotActions.getSpots())
    }, [dispatch])

    useEffect(() => {
        dispatch(bookingActions.getBookings())
    }, [dispatch])


    useEffect(() => {
        dispatch(reviewActions.getReviews())
    }, [dispatch])

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])

    const spotsObj = useSelector((state) => state?.spotReducer?.spots);

    const spots = Object.values(spotsObj);

    const bookingObj = useSelector((state) => state?.bookingReducer?.bookings);
    const bookings = Object.values(bookingObj)


    const reviewsObj = useSelector(state => state?.reviewReducer?.reviews);

    const reviews = Object.values(reviewsObj);


    const spotUser = spots?.filter(e => {

        if (e?.userId === user?.id) {
            return e;
        }
    })

    const bookingUser = bookings?.filter(e => {

        if (e?.userId === user?.id) {
            return e;
        }
    })
    const reviewUser = reviews?.filter(e => {

        if (e?.userId === user?.id) {
            return e;
        }
    })


    return (

        <div className='main-div-profile-page'>
            <div className='profile-table'>

                <div className='profile-table-upper'>

                    <img className="image-profile-profile-page" src={user?.profileUrl} alt=''></img>

                    <p className="user-username">{user?.username}</p>
                </div>
                <div className='bookings-reviews-spots'>
                    <div className='wanna-talk-to-him'>
                        <p>Spots</p>
                        {spotUser.map((value, key) => {
                            return <NavLink key={key} exact to={`/spots/${value.id}`}><div className='dataItema' key={key}>{value?.name}</div></NavLink>

                        })}
                    </div>
                    <div className='wanna-talk-to-him'>
                        <p>Bookings</p>
                        {bookingUser.map((value, key) => {
                            return <NavLink key={key} exact to={`/spots/${value?.Spot?.id}`}><div className='dataItema' key={key}>{value?.Spot?.name}</div></NavLink>

                        })}
                    </div>
                    <div className='wanna-talk-to-him'>
                        <p>Reviews</p>
                        {reviewUser.map((value, key) => {
                            return <NavLink key={key} exact to={`/spots/${value?.Spot?.id}`}><div className='dataItema' key={key}>{value?.Spot?.name}</div></NavLink>

                        })}
                    </div>


                </div>

            </div>

            <div className='white-div-for-profile-page'>

            </div>
          <Footer />

        </div>
    )
}



export default Profile;
