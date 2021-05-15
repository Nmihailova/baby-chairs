const initialState = {
    isChairChecked: false,
    isFirstPillowChecked: false,
    isSecondPillowChecked: false,
};

function checkGoodsReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHECK_CHAIR':
            return {
                ...state,
                isChairChecked: !state.isChairChecked,
            };

        case 'CHECK_FIRST_PILLOW':
            return {...state, isFirstPillowChecked: !state.isFirstPillowChecked};

        case 'CHECK_SECOND_PILLOW':
            return {...state, isSecondPillowChecked: !state.isSecondPillowChecked};

        default:
            return state;
    }
}

export default checkGoodsReducer;
