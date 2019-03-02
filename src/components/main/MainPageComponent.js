import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import HeaderComponent from '../header/HeaderComponent';
import Menu from '../menu/MenuComponent';
import Order from '../order/OrderComponent';

class MainPageComponent extends Component {
  render () {
    const MenuComponent = withRouter(props => <Menu {...props} />);
    return (
      <div>
        <HeaderComponent />
        <MenuComponent />
        <Switch>
          <Route path="/order" component={Order} />
        </Switch>
      </div>

    )
  }
};

export default MainPageComponent;