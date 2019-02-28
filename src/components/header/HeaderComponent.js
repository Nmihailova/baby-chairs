import React from 'react';

import './header.scss';

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={require("../../img/logo.jpg")} />
      </div>

      <h1 className="header__title">Растущий стул <br />"Винни"</h1>
      <div className="header__info">
        <p>
          Адрес:
          г.Чебоксары,
          пр.И.Яковлева, д.1, кв.1
        </p>
        <p>
          Телефон:
          8(968)-641-00-88
        </p>
        <p>
          E-mail:
          winnie-stul@mail.ru
        </p>
      </div>
    </div>
  )
};

export default HeaderComponent;