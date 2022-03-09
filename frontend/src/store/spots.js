import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/get';
const ADD_SPOT = 'spots/create-one';
const EDIT_SPOT = 'spots/edit-the-thing';
const DELETE_SPOT = 'spots/delete';
const ADD_BOOKING = 'spots/booking/add';


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
            newState[action.spot.id] = {...action.spot};
            return newState;
        case EDIT_SPOT:
            newState = { ...state };
            newState[action.spot.id] = { ...newState[action.spot.id], ...action.spot };
            return newState;
        case DELETE_SPOT:
            newState = { ...state };
            delete newState[action.id];
            return newState;
        case ADD_BOOKING:
            newState= {...state};

            return newState;
        default:
            return state;
    }
}


export default spotReducer;
