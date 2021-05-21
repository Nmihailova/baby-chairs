import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

import {Header} from './components/header/HeaderComponent';
import {Menu} from './components/menu/MenuComponent';
import Order from './components/order/OrderComponent';
import Feedbacks from './components/feedbacks/FeedbacksComponent';
import {PhotoGallery} from './components/photogallery/PhotoGalleryComponent';
import {AboutCompany} from './components/about/AboutCompanyComponent';
import {Delivery} from './components/delivery/DeliveryComponent';
import {Contacts} from './components/contacts/ContactsComponent';
import {FooterComponent} from './components/footer/FooterComponent';

import './App.scss';

const MenuComponent = withRouter((props) => <Menu {...props} />);

const App = () => (
    <div className="App">
        <Header />
        <MenuComponent />
        <Switch>
            <Route exact path="/" component={AboutCompany} />
            <Route path="/order" component={Order} />
            <Route path="/feedbacks" component={Feedbacks} />
            <Route path="/photogallery" component={PhotoGallery} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/contacts" component={Contacts} />
        </Switch>
        <FooterComponent />
    </div>
);

export default App;
