import { csrfFetch } from './csrf';




const GET_REVIEWS = 'reviews/bookings/get';
const ADD_REVIEW = 'reviews/booking/add';
const DELETE_REVIEW = 'reviews/booking/delete';




const addReviewAction = (review) => ({

    type: ADD_REVIEW,
    review

})

const deleteReviewAction = (id) => ({
    type: DELETE_REVIEW,
    id
})

const getReviewsAction = (reviews) => ({
    type: GET_REVIEWS,
    reviews
})



export const addReviews = (review) => async (dispatch) => {

    try {
        const response = await csrfFetch('/api/spots/review', {
            method: 'POST',
            body: JSON.stringify(review)
        });

        if (response.ok) {
            const data = await response.json();


            return dispatch(addReviewAction(data));
        }
    } catch (error) {
        const res = await error.json();
        return res;
    }

}





export const getReviews = () => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/reviews`)

    const data = await response.json();


    dispatch(getReviewsAction(data.reviews));

    return response;
};

export const deleteReview = (id) => async (dispatch) => {

    const response = await csrfFetch(`/api/spots/reviews/${id}/delete`, {
        method: "DELETE"
    });


    if (response.ok) {
        const data = await response.json();
        dispatch(deleteReviewAction(data.id));
    }

    return response;
}



const initialState = { reviews: {} };





const reviewReducer = (state = initialState, action) => {
    let newState;
    let newReviews;


    switch (action.type) {
        case GET_REVIEWS:
            newState = { ...state };
            newReviews = {};
            action.reviews.forEach(element => {
                newReviews[element.id] = element;
            });
            newState.reviews = { ...newReviews };
            return newState;
        case DELETE_REVIEW:
            newState = { ...state };
            newReviews = { ...state.reviews };
            delete newReviews[action.id];
            newState.reviews = { ...newReviews };
            return newState;
        case ADD_REVIEW:
            newState= {...state};
            newReviews = {...state.reviews};
            newReviews[action.review.id] = action.review;
            newState.reviews = {...newReviews};
            return newState;
        default:
            return state;
    }

}

export default reviewReducer;
