import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/get';
const ADD_SPOT = 'spots/create-one';

const getSpot = (spots) => ({
    type: GET_SPOTS,
    spots
})

const addSpot = (spot) => ({
    tpye: ADD_SPOT,
    spot
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
            newState.spots = newSpots;
            return newState;
        case ADD_SPOT:
            newState = {...state};
            newState[action.spot.id] = action.spot;
            return newState
        default:
            return state;
    }
}


export default spotReducer;
