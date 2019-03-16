import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img className="header__logo__img" src={require("../../img/logo.png")} />
        <h1 className="header__logo__title">Растущий стул <br />"ВИННИ"</h1>
      </Link>

      <div className="header__info">
        <p>
          Адрес:
          Чувашская Республика г.Чебоксары
        </p>
        <p>
          Тел.:
          8(968)-641-00-88
        </p>
        <p>8-987-662-82-56</p>
        <p>
          E-mail:
          winnie-stul@mail.ru
        </p>
      </div>
    </header>
  )
};

export default Header;