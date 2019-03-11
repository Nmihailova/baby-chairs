import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  requestMakeOrderApi,
  changeCountOfChairs,
  changeCountOfFirstPillow,
  changeCountOfSecondPillow,
  checkChair,
  checkFirstPillow,
  checkSecondPillow,
  chooseCountChairColors
} from '../../js/actions';

import './order.scss';

import TableOrder from './goodsInfo/table/TableOrderComponent';
import Note from './note/NoteComponent';


const mapStateToProps = state => {
  return {
    costOfChair: state.countCostReducer.costOfChair,
    costOfFirstPillow: state.countCostReducer.costOfFirstPillow,
    costOfSecondPillow: state.countCostReducer.costOfSecondPillow,
    isChairChecked: state.checkGoodsReducer.isChairChecked,
    isFirstPillowChecked: state.checkGoodsReducer.isFirstPillowChecked,
    isSecondPillowChecked: state.checkGoodsReducer.isSecondPillowChecked,
    chairColor: state.colorReducer.chairColor,
    chairLegColor: state.colorReducer.chairLegColor,
    firstPillowColor: state.colorReducer.firstPillowColor,
    secondPillowColor: state.colorReducer.secondPillowColor,
    countColorsOfChair: state.colorReducer.countColorsOfChair,
    countOfChairs: state.countOfGoodsReducer.countOfChairs,
    countOfFirstPillow: state.countOfGoodsReducer.countOfFirstPillow,
    countOfSecondPillow: state.countOfGoodsReducer.countOfSecondPillow
  }
};
const mapDispatchToProps = dispatch => {
  return {
    requestMakeOrderApi: (data) => dispatch(requestMakeOrderApi(data)),
    changeCountOfChairs: (count) => dispatch(changeCountOfChairs(count)),
    changeCountOfFirstPillow: (count) => dispatch(changeCountOfFirstPillow(count)),
    changeCountOfSecondPillow: (count) => dispatch(changeCountOfSecondPillow(count)),
    checkChair: () => dispatch(checkChair()),
    checkFirstPillow: () => dispatch(checkFirstPillow()),
    checkSecondPillow: () => dispatch(checkSecondPillow()),
    chooseCountChairColors: (value) => dispatch(chooseCountChairColors(value))
  }
};

class OrderComponent extends Component {
  state = {
    firstName: '',
    secondName: '',
    phoneNumber: '',
    mail: '',
    city: '',
    street: '',
    houseNumber: '',
    flatNumber: '',
    deliveryDate: '',
    deliveryMethod: "Курьер",
    comments: '',
    isOrderSent: false
  };
  clearForm = () => {
    this.props.changeCountOfChairs(1);
    this.props.changeCountOfFirstPillow(1);
    this.props.changeCountOfSecondPillow(1);
    this.props.checkChair();
    this.props.checkFirstPillow();
    this.props.checkSecondPillow();

    this.setState(() => ({
      firstName: '',
      secondName: '',
      phoneNumber: '',
      mail: '',
      city: '',
      street: '',
      houseNumber: '',
      flatNumber: '',
      deliveryDate: '',
      deliveryMethod: "Курьер",
      comments: ''
    }));
  };

  cutPotentialDangerousChars = (data) => {
    let potentialDangerousChars = /[<>{}\[\]]/gi;
    for (let key in data) {
      let newStr = data[key].toString().replace(potentialDangerousChars, " ");
      data[key] = newStr;
    }
  };
  getTotalAmount = () => {
    let totalAmount = this.props.costOfChair + this.props.costOfFirstPillow + this.props.costOfSecondPillow;
    return totalAmount;
  }
  secondNameChange = e => {
    let inputedSecondName = e.target.value;
    this.setState(() => ({
      secondName: inputedSecondName
    }));
  };
  firstNameChange = e => {
    let inputedFirstName = e.target.value;
    this.setState(() => ({
      firstName: inputedFirstName
    }));
  };
  phoneNumberChange = e => {
    let inputedPhoneNumber = e.target.value;
    this.setState(() => ({
      phoneNumber: inputedPhoneNumber
    }));
  };
  mailChange = e => {
    let inputedMail = e.target.value;
    this.setState(() => ({
      mail: inputedMail
    }));
  };
  cityChange = e => {
    let inputedCity = e.target.value;
    this.setState(() => ({
      city: inputedCity
    }));
  };
  houseNumberChange = e => {
    let inputedHouseNumber = e.target.value;
    this.setState(() => ({
      houseNumber: inputedHouseNumber
    }));
  };
  flatNumberChange = e => {
    let inputedFlatNumber = e.target.value;
    this.setState(() => ({
      flatNumber: inputedFlatNumber
    }));
  };
  streetChange = e => {
    let inputedStreet = e.target.value;
    this.setState(() => ({
      street: inputedStreet
    }));
  };
  chooseDeliveryMethod = e => {
    let method = e.target.value;
    this.setState(() => ({
      deliveryMethod: method
    }))
  };
  deliveryDateChange = e => {
    let inputedDate = e.target.value;
    this.setState(() => ({
      deliveryDate: inputedDate
    }));
  };
  changeComment = e => {
    let inputedComments = e.target.value;
    this.setState(() => ({
      comments: inputedComments
    }))
  };

  showNote = () => {
    this.setState((prevState) => ({
      isOrderSent: !prevState.isOrderSent
    }));
  };
  makeOrder = () => {
    let dataObj = {
      items: [],
      totalAmount: this.getTotalAmount(),
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      phoneNumber: this.state.phoneNumber,
      mail: this.state.mail,
      city: this.state.city,
      street: this.state.street,
      houseNumber: this.state.houseNumber,
      flatNumber: this.state.flatNumber,
      deliveryDate: this.state.deliveryDate,
      deliveryMethod: this.state.deliveryMethod,
      comments: this.state.comments
    };
    this.cutPotentialDangerousChars(dataObj);

    console.log(dataObj);

    if (this.props.isChairChecked) {
      let chairItem = {
        item: "Стул",
        color: this.props.chairColor,
        count: this.props.countOfChairs
      };

      if (this.props.countColorsOfChair == "bicolor") {
        chairItem.colorLegChair = this.props.chairLegColor;
        dataObj.items.push(chairItem);
      } else {
        dataObj.items.push(chairItem);
      }

    }
    if (this.props.isFirstPillowChecked) {
      let firstPillowItem = {
        item: "Подушка 1",
        color: this.props.firstPillowColor,
        count: this.props.countOfFirstPillow
      };
      dataObj.items.push(firstPillowItem);
    }
    if (this.props.isSecondPillowChecked) {
      let secondPillowItem = {
        item: "Подушка 2",
        color: this.props.secondPillowColor,
        count: this.props.countOfSecondPillow
      };
      dataObj.items.push(secondPillowItem);
    }

    this.props.requestMakeOrderApi(dataObj);
    this.showNote();
    this.clearForm();
  }
  render () {
    return (
      <div className="order" >
        <TableOrder getTotalAmount={this.getTotalAmount} />

        <div className="order__info">
          <input className="order__info__input" value={this.state.secondName} placeholder="Фамилия" onChange={this.secondNameChange} />
          <input className="order__info__input" value={this.state.firstName} placeholder="Имя" onChange={this.firstNameChange} />
          <input className="order__info__input" value={this.state.phoneNumber} placeholder="Номер телефона" onChange={this.phoneNumberChange} />
          <input className="order__info__input" value={this.state.mail} placeholder="E-mail" onChange={this.mailChange} />

          <p>Адрес доставки:</p>
          <input className="order__info__input" value={this.state.city} placeholder="Город" onChange={this.cityChange} />
          <input className="order__info__input" value={this.state.street} placeholder="Улица" onChange={this.streetChange} />
          <input className="order__info__input" value={this.state.houseNumber} placeholder="Дом" onChange={this.houseNumberChange} />
          <input className="order__info__input" value={this.state.flatNumber} placeholder="Квартира" onChange={this.flatNumberChange} />

          <input className="order__info__input" value={this.state.deliveryDate} placeholder="Дата доставки" onChange={this.deliveryDateChange} />
        </div>

        <div className="order__delivery">
          <p>Способ доставки:</p>
          <div>
            <label>
              <input type="radio" value="Курьер" checked={this.state.deliveryMethod === "Курьер"} onChange={this.chooseDeliveryMethod} />
              Курьер
        </label>
          </div>
          <div>
            <label>
              <input type="radio" value="Почта России" checked={this.state.deliveryMethod === "Почта России"} onChange={this.chooseDeliveryMethod} />
              Почта России
        </label>
          </div>
          <div>
            <label>
              <input type="radio" value="Доставка по России и СНГ транспортными компаниями" checked={this.state.deliveryMethod === "Доставка по России и СНГ транспортными компаниями"}
                onChange={this.chooseDeliveryMethod} />
              Доставка по России и СНГ транспортными компаниями
        </label>
          </div>
        </div>

        <div className="order__comments">
          <label>
            <p>Ваши комментарии к заказу:</p>
            <textarea rows="10" cols="60" value={this.state.comments} onChange={this.changeComment} />
          </label>
        </div>

        {this.state.isOrderSent && <Note showNote={this.showNote} />}

        <button className="order__order-btn" type="submit" onClick={this.makeOrder}>Заказать</button>

      </div>
    );
  }
};

const Order = connect(mapStateToProps, mapDispatchToProps)(OrderComponent);
export default Order;
