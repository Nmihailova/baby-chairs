import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import HeaderComponent from '../header/HeaderComponent';
import Menu from '../menu/MenuComponent';
import Order from '../order/OrderComponent';
import Feedbacks from '../feedbacks/FeedbacksComponent';
import { PhotoGallery } from '../photogallery/PhotoGalleryComponent';
import AboutCompany from '../about/AboutCompanyComponent';
import { Delivery } from '../delivery/DeliveryComponent';
import { Contacts } from '../contacts/ContactsComponent';

class MainPageComponent extends Component {
  render () {
    const MenuComponent = withRouter(props => <Menu {...props} />);
    return (
      <div>
        <HeaderComponent />
        <MenuComponent />
        <Switch>
          <Route exact path="/" component={AboutCompany} />
          <Route path="/order" component={Order} />
          <Route path="/feedbacks" component={Feedbacks} />
          <Route path="/photogallery" component={PhotoGallery} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    )
  }
};

export default MainPageComponent;