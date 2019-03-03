import React from 'react';

const initialState = {
    isFeedbackLeft: false,
    feedbacksList: []
};

function feedbacksReducer (state = initialState, action) {
    switch (action.type) {
        case 'LEAVE_FEEDBACK_SUCCESS': 
            return {...state, isFeedbackLeft: action.payload.message};

        case 'LEAVE_FEEDBACK_FAIL': 
            return {...state, isFeedbackLeft: action.payload.message};

        case 'GET_FEEDBACK_LIST_SUCCESS':
            console.log(action.payload);
            return {...state, feedbacksList: action.payload};

        case 'GET_FEEDBACK_LIST_FAIL':
            console.log(action.payload);
            return {...state, feedbacksList: "Не удалось загрузить отзывы."};
    
        default:
            return state;
    }
};

export default feedbacksReducer;