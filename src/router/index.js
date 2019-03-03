import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Order from '../components/order/OrderComponent';
import Feedbacks from '../feedbacks/FeedbacksComponent';

const RouterPaths = () => (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={WelcomeComponent} />
        <Route path="/game" component={GameComponent} /> */}
        <Route path="/order" component={Order} />
        <Route path="/feedbacks" component={Feedbacks} />
      </Switch>
    </BrowserRouter>
  );
  
  export default RouterPaths;