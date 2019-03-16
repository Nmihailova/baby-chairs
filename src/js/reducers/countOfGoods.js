const initialState = {
  countOfChairs: 1,
  countOfFirstPillow: 1,
  countOfSecondPillow: 1,
};

function countOfGoodsReducer (state = initialState, action) {
  switch (action.type) {
    case 'COUNT_CHAIRS':
      return { ...state, countOfChairs: action.count };

    case 'COUNT_FIRST_PILLOW':
      return { ...state, countOfFirstPillow: action.count };

    case 'COUNT_SECOND_PILLOW':
      return { ...state, countOfSecondPillow: action.count };

    default:
      return state;
  }
};

export default countOfGoodsReducer;