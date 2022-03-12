import { csrfFetch } from './csrf';


const GET_USERS = 'user/profile/get';



const getSpot = (users) => ({
    type: GET_USERS,
    users
});



export const getUsers = () => async(dispatch) =>{

    const response = await csrfFetch('/api/spots/profile/users');


    if(response.ok){
        const data = await response.json();

        dispatch(getSpot(data));
    }

}



const initialState = {users:{}};


const userReducer = (state = initialState, action) => {
    let newState;
    let newUser;
    switch (action.type) {
        case GET_USERS:
            newState = {...state};
            newUser={};
            action.users.forEach(element => {
                newUser[element.id] = element;
            });
            newState.users = {...newUser};
            return newState;
        default:
            return state
    }


}

export default userReducer;
