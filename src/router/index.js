import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Order from '../components/order/OrderComponent';

const RouterPaths = () => (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={WelcomeComponent} />
        <Route path="/game" component={GameComponent} /> */}
        <Route path="/order" component={Order} />
        {/* <Route path="/end" component={EndComponent} /> */}
      </Switch>
    </BrowserRouter>
  );
  
  export default RouterPaths;