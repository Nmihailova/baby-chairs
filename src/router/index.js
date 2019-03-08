import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Order from '../components/order/OrderComponent';
import Feedbacks from '../components/feedbacks/FeedbacksComponent';
import { PhotoGallery } from '../components/photogallery/PhotoGalleryComponent';

const RouterPaths = () => (
    <BrowserRouter>
      <Switch>
        <Route path="/order" component={Order} />
        <Route path="/feedbacks" component={Feedbacks} />
        <Route path="/photogallery" component={PhotoGallery} />
      </Switch>
    </BrowserRouter>
  );
  
  export default RouterPaths;