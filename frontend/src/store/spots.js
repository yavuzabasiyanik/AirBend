import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/get';
const ADD_SPOT = 'spots/create-one';
const EDIT_SPOT = 'spots/edit-the-thing';
const DELETE_SPOT = 'spots/delete';

const getSpot = (spots) => ({
    type: GET_SPOTS,
    spots
})

const addSpot = (spot) => ({
    type: ADD_SPOT,
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

export const getSpots = () => async (dispatch) => {

    const response = await csrfFetch('/api/spots')

    if (response.ok) {
        const data = await response.json();
        dispatch(getSpot(data.spots));
    }
    return response;
};

export const createSpot = (payload) => async (dispatch) => {


    try {
        const response = await csrfFetch('/api/spots', {
            method: "POST",
            body: JSON.stringify(payload)
        });

        if (response.ok) {

            const data = await response.json();


           return dispatch(addSpot(data));


        }

    } catch (error) {

        const res = await error.json();

        return res;



    };
}



export const editSpotThunk = (payload) => async (dispatch) => {

    try {

        const response = await csrfFetch(`/api/spots/${+payload.id}`, {
            method: "PUT",
            body: JSON.stringify(payload)
        })

        if (response.ok) {

            const data = await response.json();


           return dispatch(editSpot(data));


        }

    } catch (error) {

        const res = await error.json();

        return res;



    };

};

export const deleteSpotThunk = (payload) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/${+payload.id}`, {
        method: "DELETE",
    })

    if (response.ok) {

        const data = await response.json();

        dispatch(deleteSpot(data.id));
    }

    return response;

};


const initialState = { spots: {} };



const spotReducer = (state = initialState, action) => {
    let newState;
    let newSpots;
    switch (action.type) {
        case GET_SPOTS:
            newState = { ...state }
            newSpots = {}
            action.spots.forEach(e => {
                newSpots[e.id] = e;
            });
            newState.spots = {...newSpots};
            return newState;
        case ADD_SPOT:
            newState = { ...state };
            newSpots = { ...state.spots };
            newSpots[action.spot.id] = action.spot;
            newState.spots = { ...newSpots };
            return newState;
        case EDIT_SPOT:
            newState = { ...state };
            newSpots = { ...state.spots };
            newSpots[action.spot.id] = { ...newSpots[action.spot.id], ...action.spot }
            newState.spots = { ...newSpots };
            return newState;
        case DELETE_SPOT:
            newState = { ...state };
            newSpots = { ...state.spots };

            delete newSpots[action.id];


            newState.spots = { ...newSpots };


            return newState;
        default:
            return state;
    }
}


export default spotReducer;
