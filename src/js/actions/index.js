import axios from 'axios';

const HOST = "http://localhost:3001";

export const changeCountOfChairs = (count) => {
  return {
    type: 'COUNT_CHAIRS',
    count
  }
};
export const changeCountOfFirstPillow = (count) => {
  return {
    type: 'COUNT_FIRST_PILLOW',
    count
  }
};
export const changeCountOfSecondPillow = (count) => {
  return {
    type: 'COUNT_SECOND_PILLOW',
    count
  }
};
export const checkChair = () => {
  return {
    type: 'CHECK_CHAIR'
  }
};
export const checkFirstPillow = () => {
  return {
    type: 'CHECK_FIRST_PILLOW'
  }
};
export const checkSecondPillow = () => {
  return {
    type: 'CHECK_SECOND_PILLOW'
  }
};
export const countChairCost = cost => {
  return {
    type: 'COUNT_CHAIR_COST',
    cost
  }
};
export const countFirstPillowCost = cost => {
  return {
    type: 'COUNT_FIRST_PILLOW_COST',
    cost
  }
};
export const countSecondPillowCost = cost => {
  return {
    type: 'COUNT_SECOND_PILLOW_COST',
    cost
  }
};
export const chooseCountChairColors = value => {
  return {
    type: 'COUNT_OF_CHAIR_COLORS',
    value
  }
};

export const chooseChairColor = (color) => {
  return {
    type: 'CHAIR_COLOR',
    color
  }
};
export const chooseChairLegColor = (color) => {
  return {
    type: 'CHAIR_LEG_COLOR',
    color
  }
};
export const chooseFirstPillowColor = (color) => {
  return {
    type: 'FIRST_PILLOW_COLOR',
    color
  }
};
export const chooseSecondPillowColor = (color) => {
  return {
    type: 'SECOND_PILLOW_COLOR',
    color
  }
};

//api middlewares
export const requestMakeOrderApi = data => {
  return dispatch => {
    dispatch({
      type: 'MAKE_ORDER_REQUEST',
      payload: data
    })

    axios.post(`${HOST}/send`, data)
      .then(res => {
        dispatch({
          type: 'MAKE_ORDER_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'MAKE_ORDER_FAIL',
          payload: err
        })
      })
  }
};

export const requestLeaveFeedbackApi = data => {
  return dispatch => {
    dispatch({
      type: 'LEAVE_FEEDBACK_REQUEST',
      payload: data
    })

    axios.post(`${HOST}/leave-feedback`, data)
      .then(res => {
        dispatch({
          type: 'LEAVE_FEEDBACK_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'LEAVE_FEEDBACK_FAIL',
          payload: err
        })
      })
  }
};

export const requestGetFeedbacksApi = () => {
  return dispatch => {
    dispatch({
      type: 'GET_FEEDBACK_LIST_REQUEST'
    })

    axios.get(`${HOST}/get-feedbacks`)
      .then(res => {
        dispatch({
          type: 'GET_FEEDBACK_LIST_SUCCESS',
          payload: res.data
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_FEEDBACK_LIST_FAIL',
          payload: err
        })
      })
  }
};


