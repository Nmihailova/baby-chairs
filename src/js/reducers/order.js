const initialState = {
  orderStatus: false
};

function makeOrderReducer (state = initialState, action) {
  switch (action.type) {
    case 'MAKE_ORDER_REQUEST':
      return { ...state, orderStatus: action.payload };

    case 'MAKE_ORDER_SUCCESS':
      return { ...state, orderStatus: action.payload.message };

    case 'MAKE_ORDER_FAIL':
      return { ...state, orderStatus: action.payload.message };

    default:
      return state;
  }
};

export default makeOrderReducer;