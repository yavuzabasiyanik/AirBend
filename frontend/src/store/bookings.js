import { csrfFetch } from './csrf';


const GET_BOOKINGS = 'spots/bookings/get';
const ADD_BOOKING = 'spots/booking/add';
const DELETE_BOOKING = 'spots/booking/delete';




const addBooking = (booking) => ({

    type: ADD_BOOKING,
    booking

})

const deleteBookingAction = (id) => ({
    type: DELETE_BOOKING,
    id
})

const getBooking = (bookings) => ({
    type: GET_BOOKINGS,
    bookings
})


export const getBookings = () => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/bookings`)

    const data = await response.json();

    dispatch(getBooking(data.bookings));
    return response;
};


export const createBooking = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/booking`, {
        method: 'POST',
        body: JSON.stringify(payload)
    })

    if (response.ok) {

        const data = await response.json();

        dispatch(addBooking(data));
    }

    return response;
    // we dont need to return response

}


export const deleteBooking = ({ id, spotId }) => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/bookings/${id}`, {
        method: 'DELETE'
    });

    // console.log(id,spotId);
    if (response.ok) {

        const { id } = await response.json();

        dispatch(deleteBookingAction(Number(id)));

    }

}


const initialState = { bookings: {} };



const bookingReducer = (state = initialState, action) => {
    let newState;
    let newBookings


    switch (action.type) {
        case GET_BOOKINGS:
            newState = { ...state }
            newBookings = {}
            action.bookings.forEach(e => {
                newBookings[e.id] = e;
            });
            newState.bookings = newBookings;
            return newState;
        case ADD_BOOKING:
            newState = { ...state };
            newBookings = {...state.bookings};

            newBookings[action.booking.id] = action.booking;

            newState.bookings = {...newBookings};

            return newState;
            case DELETE_BOOKING:
            newState = { ...state };
            newBookings = {...state.bookings};

            delete newBookings[action.id];


            newState.bookings = { ...newBookings };


            return newState;
        default:
            return state;
    }

}

export default bookingReducer;
