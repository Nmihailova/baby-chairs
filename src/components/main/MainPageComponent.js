import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderComponent from '../header/HeaderComponent';

class MainPageComponent extends Component {
  render () {
    return (
      <HeaderComponent />
    )
  }
};

export default MainPageComponent;