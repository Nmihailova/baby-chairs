import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCountOfSecondPillow, checkSecondPillow, chooseSecondPillowColor, countSecondPillowCost } from '../../../../js/actions';
import { pillowColors } from '../../../../data/colors';

const mapStateToProps = state => {
  return {
    countOfSecondPillow: state.countOfGoodsReducer.countOfSecondPillow,
    isSecondPillowChecked: state.checkGoodsReducer.isSecondPillowChecked,
    countOfSecondPillow: state.countOfGoodsReducer.countOfSecondPillow
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeCountOfSecondPillow: (count) => dispatch(changeCountOfSecondPillow(count)),
    checkSecondPillow: () => dispatch(checkSecondPillow()),
    chooseSecondPillowColor: (color) => dispatch(chooseSecondPillowColor(color)),
    countSecondPillowCost: (cost) => dispatch(countSecondPillowCost(cost))
  }
};

class SecondPillowComponent extends Component {
  state = {
    isColorsShown: false,
    secondPillowColor: '#ebced0'
  };
  componentDidUpdate () {
    this.toCountCostOfSecondPillow();
  }

  chooseColorForSecondPillow = (color, name) => {
    this.props.chooseSecondPillowColor(name);
    this.showColorsOfSecondPillow();
    this.setState(() => ({
      secondPillowColor: color
    }))
  };
  showColorsOfSecondPillow = () => {
    this.setState((prevState) => ({
      isColorsShown: !prevState.isColorsShown
    }))
  };
  toChangeCountOfSecondPillow = e => {
    let count;
    let inputedCount = e.target.value;
    let reg = new RegExp(/^\d+$|^$/);
    let result = reg.test(inputedCount);

    if (result) {
      if (Number(e.target.value) < 10000) {
        count = e.target.value;
      } else {
        count = 10000;
      }
      this.props.changeCountOfSecondPillow(count);
    }

  };
  toCheckSecondPillow = () => {
    this.props.checkSecondPillow();
  };
  toCountCostOfSecondPillow = () => {
    if (this.props.isSecondPillowChecked) {
      let cost = this.props.secondPillowPrice * Number(this.props.countOfSecondPillow);
      this.props.countSecondPillowCost(cost);
    } else {
      let cost = 0;
      this.props.countSecondPillowCost(cost);
    }
  };


  render () {
    const blockOfColors = pillowColors.map((item, index) => {
      return <div key={index} className="order__color-btn" style={{ backgroundColor: item.color }} onClick={() => this.chooseColorForSecondPillow(item.color, item.name)}></div>
    });

    const { countOfSecondPillow, secondPillowPrice, isSecondPillowChecked, secondPillowColor } = this.props;

    return (
      <tr>
        <td className="order__block">Подушка 2</td>
        <td className="order__block">
          <div className="order__block__colors">
            <button className="order__block__colors__show-colors" onClick={this.showColorsOfSecondPillow} style={{ backgroundColor: this.state.secondPillowColor }}></button>
            {this.state.isColorsShown &&
              <div className="order__block__colors__color">
                {blockOfColors}
              </div>}
          </div>

        </td>
        <td className="order__block">
          <input className="order__block__count" value={countOfSecondPillow} type="number" min="0" max="10000" onChange={this.toChangeCountOfSecondPillow}></input>
        </td>
        <td className="order__block">{`${secondPillowPrice} руб.`}</td>
        <td className="order__block">
          <input type="checkbox" checked={isSecondPillowChecked} onChange={() => this.toCheckSecondPillow(secondPillowPrice)} />
        </td>
      </tr>
    )
  }
};

const SecondPillow = connect(mapStateToProps, mapDispatchToProps)(SecondPillowComponent);
export default SecondPillow;