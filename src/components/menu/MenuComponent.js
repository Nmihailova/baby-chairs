import React from 'react';
import {Link} from 'react-router-dom';

import './menu.scss';

export const Menu = ({location}) => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                <Link className={location.pathname === '/' ? 'menu__list__item active' : 'menu__list__item'} to="/">
                    <li>Наша продукция</li>
                </Link>
                <Link
                    className={location.pathname === '/photogallery' ? 'menu__list__item active' : 'menu__list__item'}
                    to="/photogallery"
                >
                    <li>Фотогалерея</li>
                </Link>
                <Link
                    className={location.pathname === '/delivery' ? 'menu__list__item active' : 'menu__list__item'}
                    to="/delivery"
                >
                    <li>Доставка и оплата</li>
                </Link>
                <Link
                    className={location.pathname === '/feedbacks' ? 'menu__list__item active' : 'menu__list__item'}
                    to="/feedbacks"
                >
                    <li>Отзывы</li>
                </Link>
                <Link
                    className={location.pathname === '/order' ? 'menu__list__item active' : 'menu__list__item'}
                    to="/order"
                >
                    <li value="order">Сделать заказ</li>
                </Link>
                <Link
                    className={location.pathname === '/contacts' ? 'menu__list__item active' : 'menu__list__item'}
                    to="/contacts"
                >
                    <li>Контакты</li>
                </Link>
            </ul>
        </nav>
    );
};
