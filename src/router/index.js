import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Order from '../components/order/OrderComponent';
import Feedbacks from '../components/feedbacks/FeedbacksComponent';
import { PhotoGallery } from '../components/photogallery/PhotoGalleryComponent';
import AboutCompany from '../components/about/AboutCompanyComponent';
import { Delivery } from '../components/delivery/DeliveryComponent';
import { Contacts } from '../components/contacts/ContactsComponent';

const RouterPaths = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AboutCompany} />
        <Route path="/order" component={Order} />
        <Route path="/feedbacks" component={Feedbacks} />
        <Route path="/photogallery" component={PhotoGallery} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </BrowserRouter>
  );
  
  export default RouterPaths;