import React, { Component } from 'react';

import Chair from '../chair/ChairComponent';
import FirstPillow from '../firstPillow/FirstPillowComponent';
import SecondPillow from '../secondPillow/SecondPillowComponent';

import './order.scss';

export default class TableOrderComponent extends Component {
  state = {
    chairPrice: 6000,
    firstPillowPrice: 1000,
    secondPillowPrice: 500
  };

  render () {
    return (
      <table cols="5">
        <tbody>
          <tr>
            <th className="order__header"></th>
            <th className="order__header">Цвет</th>
            <th className="order__header">Количество</th>
            <th className="order__header">Цена</th>
            <th className="order__header">Выбрать</th>
          </tr>

          <Chair toCountCostOfChair={this.toCountCostOfChair} chairPrice={this.state.chairPrice} />
          <FirstPillow toCountCostOfChair={this.toCountCostOfChair} firstPillowPrice={this.state.firstPillowPrice} />
          <SecondPillow toCountCostOfChair={this.toCountCostOfChair} secondPillowPrice={this.state.secondPillowPrice} />

          <tr>
            <td className="order__footer order__footer_text" colSpan="3">Итого:</td>
            <td className="order__footer order__footer_cost">{`${this.props.getTotalAmount()} руб.`}</td>
            <td className="order__footer"></td>
          </tr>
        </tbody>
      </table>
    )
  }
};