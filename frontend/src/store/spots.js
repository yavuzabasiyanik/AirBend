import { csrfFetch } from './csrf';

const GET_SPOTS = 'spots/get';


const getSpot = (spots) => ({
    type: GET_SPOTS,
    spots
})

export const getSpots = () => async (dispatch) => {

    const response = await csrfFetch('/api/spots')

    const data = await response.json();

    console.log(data, 'asdasdas');
    dispatch(getSpot(data.spots));
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
            console.log(action.spots);
            action.spots.forEach(e => {
                newSpots[e.id] = e;
            });
            newState.spots = newSpots;
            return newState;
        default:
            return state;
    }
}


export default spotReducer;
