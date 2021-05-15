import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    chooseFirstPillowColor,
    changeCountOfFirstPillow,
    checkFirstPillow,
    countFirstPillowCost,
} from '../../../../js/actions';
import {pillowColors} from '../../../../data/colors';

const mapStateToProps = (state) => {
    return {
        countOfFirstPillow: state.countOfGoodsReducer.countOfFirstPillow,
        isFirstPillowChecked: state.checkGoodsReducer.isFirstPillowChecked,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseFirstPillowColor: (color) => dispatch(chooseFirstPillowColor(color)),
        changeCountOfFirstPillow: (count) => dispatch(changeCountOfFirstPillow(count)),
        checkFirstPillow: () => dispatch(checkFirstPillow()),
        countFirstPillowCost: (cost) => dispatch(countFirstPillowCost(cost)),
    };
};

class FirstPillowComponent extends Component {
    state = {
        isColorsShown: false,
        firstPillowColor: '#ebced0',
    };
    componentDidUpdate() {
        this.toCountCostOfFirstPillow();
    }

    chooseColorForFirstPillow = (color, name) => {
        this.props.chooseFirstPillowColor(name);
        this.showColorsOfFirstPillow();
        this.setState(() => ({
            firstPillowColor: color,
        }));
    };
    showColorsOfFirstPillow = () => {
        this.setState((prevState) => ({
            isColorsShown: !prevState.isColorsShown,
        }));
    };
    toChangeCountOfFirstPillow = (e) => {
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
            this.props.changeCountOfFirstPillow(count);
        }
    };
    toCheckFirstPillow = () => {
        this.props.checkFirstPillow();
    };
    toCountCostOfFirstPillow = () => {
        if (this.props.isFirstPillowChecked) {
            let cost = this.props.firstPillowPrice * Number(this.props.countOfFirstPillow);
            this.props.countFirstPillowCost(cost);
        } else {
            let cost = 0;
            this.props.countFirstPillowCost(cost);
        }
    };

    render() {
        const blockOfColors = pillowColors.map((item, index) => {
            return (
                <div
                    key={index}
                    className="order__color-btn"
                    style={{backgroundColor: item.color}}
                    onClick={() => this.chooseColorForFirstPillow(item.color, item.name)}
                ></div>
            );
        });

        const {countOfFirstPillow, firstPillowPrice, isFirstPillowChecked} = this.props;

        return (
            <tr>
                <td className="order__block">Подушка 1</td>
                <td className="order__block">
                    <div className="order__block__colors">
                        <button
                            className="order__block__colors__show-colors"
                            onClick={this.showColorsOfFirstPillow}
                            style={{backgroundColor: this.state.firstPillowColor}}
                        ></button>
                        {this.state.isColorsShown && <div className="order__block__colors__color">{blockOfColors}</div>}
                    </div>
                </td>
                <td className="order__block">
                    <input
                        className="order__block__count"
                        value={countOfFirstPillow}
                        type="number"
                        min="0"
                        max="10000"
                        onChange={this.toChangeCountOfFirstPillow}
                    ></input>
                </td>
                <td className="order__block">{`${firstPillowPrice} руб.`}</td>
                <td className="order__block">
                    <input type="checkbox" checked={isFirstPillowChecked} onChange={this.toCheckFirstPillow} />
                </td>
            </tr>
        );
    }
}

const FirstPillow = connect(mapStateToProps, mapDispatchToProps)(FirstPillowComponent);
export default FirstPillow;
