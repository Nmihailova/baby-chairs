import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import thunk from 'redux-thunk';

const initialState = {
  checkGoodsReducer: {
    isChairChecked: false,
    isFirstPillowChecked: false,
    isSecondPillowChecked: false,
  },
  countCostReducer: {
    costOfChair: 0,
    costOfFirstPillow: 0,
    costOfSecondPillow: 0
  },
  countOfGoodsReducer: {
    countOfChairs: 1,
    countOfFirstPillow: 1,
    countOfSecondPillow: 1
  },
  colorReducer: {
    chairColor: 'K360',
    chairLegColor: 'K360',
    firstPillowColor: 'rose',
    secondPillowColor: 'rose',
    countColorsOfChair: "monochrome"
  },
  makeOrderReducer: {
    orderStatus: false
  },
  feedbacksReducer: {
    isFeedbackLeft: false,
    feedbacksList: []
  }
};

const store = createStore(combineReducers, initialState, applyMiddleware(thunk));

export default store;