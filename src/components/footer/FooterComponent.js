import React from 'react';

import './footer.scss';

export const FooterComponent = () => {
    return (
        <div className="footer">
            <p className="footer__text">Мы в соцсетях</p>
            <div className="footer__networks">
                <div className="footer__networks__vk">
                    <img className="footer__networks__vk__img" src={require('../../img/vk.png')} />
                </div>
                <div className="footer__networks__instagram">
                    <img className="footer__networks__instagram__img" src={require('../../img/inst.png')} />
                </div>
            </div>
        </div>
    )
}