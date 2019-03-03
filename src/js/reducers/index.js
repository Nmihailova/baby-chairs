import { combineReducers } from 'redux';
import checkGoodsReducer from './checkGoods';
import countOfGoodsReducer from './countOfGoods';
import colorReducer from './colorOfGoods';
import countCostReducer from './countCost';
import makeOrderReducer from './order';
import feedbacksReducer from './feedbacks';

export default combineReducers({
  checkGoodsReducer,
  countOfGoodsReducer,
  colorReducer,
  countCostReducer,
  makeOrderReducer,
  feedbacksReducer
});