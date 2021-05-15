const initialState = {
    chairColor: '#007fb6',
    chairLegColor: '#007fb6',
    firstPillowColor: '#ebced0',
    secondPillowColor: '#ebced0',
    countColorsOfChair: 'monochrome',
};

function colorReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHAIR_COLOR':
            return {...state, chairColor: action.color};

        case 'CHAIR_LEG_COLOR':
            return {...state, chairLegColor: action.color};

        case 'FIRST_PILLOW_COLOR':
            return {...state, firstPillowColor: action.color};

        case 'SECOND_PILLOW_COLOR':
            return {...state, secondPillowColor: action.color};

        case 'COUNT_OF_CHAIR_COLORS':
            return {...state, countColorsOfChair: action.value};

        default:
            return state;
    }
}

export default colorReducer;
