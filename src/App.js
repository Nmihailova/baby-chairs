import React, { Component } from 'react';
import OrderComponent from './components/order/OrderComponent';

import './App.scss';

class App extends Component {

  render () {
    return (
      <div className="App">
        <OrderComponent />
      </div>
    )
  }
}

export default App;
