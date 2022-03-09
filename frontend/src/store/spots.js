import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/get';
const ADD_SPOT = 'spots/create-one';
const EDIT_SPOT = 'spots/edit-the-thing';
const DELETE_SPOT = 'spots/delete';
const ADD_BOOKING = 'spots/booking/add';
const DELETE_BOOKING = 'spots/booking/delete';


const getSpot = (spots) => ({
    type: GET_SPOTS,
    spots
})

const addSpot = (spot) => ({
    tpye: ADD_SPOT,
    spot
})

const editSpot = (spot) => ({
    type: EDIT_SPOT,
    spot,

})

const deleteSpot = (id) => ({
    type: DELETE_SPOT,
    id
})

const addBooking = (booking) => ({

    type: ADD_BOOKING,
    booking

})

const deleteBookingAction = ({spotId,id}) => ({
    type: DELETE_BOOKING,
    id,
    spotId
})


export const getSpots = () => async (dispatch) => {

    const response = await csrfFetch('/api/spots')

    const data = await response.json();

    dispatch(getSpot(data.spots));
    return response;
};

export const createSpot = (payload) => async (dispatch) => {

    const response = await csrfFetch('/api/spots', {
        method: "POST",
        body: JSON.stringify(payload)
    })

    const data = await response.json();

    dispatch(addSpot(data.spot));
    return response;
};

export const editSpotThunk = (payload) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/${payload.id}`, {
        method: "PUT",
        body: JSON.stringify(payload)
    })

    if (response.ok) {

        const data = await response.json();

        dispatch(editSpot(data.spot));
    }

    return response;

};

export const deleteSpotThunk = (payload) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/${payload.id}`, {
        method: "DELETE",
    })

    if (response.ok) {

        const data = await response.json();

        dispatch(deleteSpot(data.id));
    }

    return response;

};

// export const createBooking = (payload) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/booking`, {
//         method: 'POST',
//         body: JSON.stringify(payload)
//     })

//     if (response.ok) {

//         const data = await response.json();

//         dispatch(addBooking(data));
//     }

//     return response;
//     // we dont need to return response

// }


// export const deleteBooking = ({id,spotId}) => async (dispatch) => {
//     const response = await csrfFetch(`/api/spots/${spotId}/bookings/${id}`, {
//         method: 'DELETE'
//     });

//     // console.log(id,spotId);
//     if (response.ok) {

//         const {id,spotId} = await response.json();

//         dispatch(deleteBookingAction({id,spotId}));

//     }

// }

const initialState = { spots: {} };



const spotReducer = (state = initialState, action) => {
    let newState;
    let newSpots;
    let newBooking;
    switch (action.type) {
        case GET_SPOTS:
            newState = { ...state }
            newSpots = {}
            action.spots.forEach(e => {
                newSpots[e.id] = e;
            });
            newState.spots = newSpots;
            return newState;
        case ADD_SPOT:
            newState = { ...state };
            newState.spots[action.spot.id] = { ...action.spot };
            return newState;
        case EDIT_SPOT:
            newState = { ...state };
            newState.spots[action.spot.id] = { ...newState.spots[action.spot.id], ...action.spot };
            return newState;
        case DELETE_SPOT:
            newState = { ...state };
            delete newState.spots[action.id];
            return newState;
        // case ADD_BOOKING:
        //     newState = { ...state };
        //     newBooking = newState.spots[action.booking.spotId].Bookings;
        //     newBooking.push(action.booking);
        //     newState.spots[action.booking.spotId] = { ...newState.spots[action.booking.spotId], newBooking };
        //     return newState;
        // case DELETE_BOOKING:
        //     newState = { ...state };
        //     newBooking = newState.spots[action.spotId].Bookings;


        //     newBooking.forEach((e)=>{

        //         if(e.id=== +action.id){
        //             newBooking.splice(newBooking.indexOf(e),1);
        //         }
        //     })

        //     newState.spots[action.spotId] = { ...newState.spots[action.spotId], newBooking };

        //     return newState;
        default:
            return state;
    }
}


export default spotReducer;
