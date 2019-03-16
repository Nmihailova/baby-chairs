import React from 'react';

import './contacts.scss';

export const Contacts = () => {
    return (
        <div className="contacts">
            <p className="contacts__text">
                Если у Вас возникли вопросы по приобретению товаров, работе нашего магазина или у Вас есть 
                <br/>предложения по сотрудничеству, Вы можете обратиться к нам по следующим контактным данным:
            </p>
            <p className="contacts__text">
                Отдел продаж (заказ, оплата, доставка):
                <br/>8 (987)-674-97-83, 8(987) 662-82-56
            </p>
            <p className="contacts__text">
                Отдел оптовых продаж:
                <br/>8 (987) 662-82-56
                
            </p>
            <p className="contacts__text">
                E-mail: winnie-stul@mail.ru
            </p>
        </div>
    )
};