const initialState = {
  costOfChair: 0,
  costOfFirstPillow: 0,
  costOfSecondPillow: 0
};

function countCostReducer (state = initialState, action) {
  switch (action.type) {
    case 'COUNT_CHAIR_COST':
      return { ...state, costOfChair: action.cost };

    case 'COUNT_FIRST_PILLOW_COST':
      return { ...state, costOfFirstPillow: action.cost };

    case 'COUNT_SECOND_PILLOW_COST':
      return { ...state, costOfSecondPillow: action.cost };

    default:
      return state;
  }
};

export default countCostReducer;