import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    changeCountOfChairs,
    checkChair,
    chooseChairColor,
    chooseChairLegColor,
    countChairCost,
    chooseCountChairColors,
} from '../../../../js/actions';
import {chairColors} from '../../../../data/colors';

const mapStateToProps = (state) => {
    return {
        countOfChairs: state.countOfGoodsReducer.countOfChairs,
        isChairChecked: state.checkGoodsReducer.isChairChecked,
        chairColor: state.colorReducer.chairColor,
        chairLegColor: state.colorReducer.chairLegColor,
        countColorsOfChair: state.colorReducer.countColorsOfChair,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCountOfChairs: (count) => dispatch(changeCountOfChairs(count)),
        checkChair: () => dispatch(checkChair()),
        chooseChairColor: (color) => dispatch(chooseChairColor(color)),
        chooseChairLegColor: (color) => dispatch(chooseChairLegColor(color)),
        countChairCost: (cost) => dispatch(countChairCost(cost)),
        chooseCountChairColors: (value) => dispatch(chooseCountChairColors(value)),
    };
};

class ChairComponent extends Component {
    state = {
        isChairColorsShown: false,
        isChairLegColorsShown: false,
        chairColor: '#007fb6',
        chairLegColor: '#007fb6',
    };
    componentDidUpdate() {
        this.toCountCostOfChair();
    }

    chooseColorForChair = (color, name) => {
        this.props.chooseChairColor(name);
        this.showChairColors();
        this.setState(() => ({
            chairColor: color,
        }));
    };
    chooseColorForChairLeg = (color, name) => {
        this.props.chooseChairLegColor(name);
        this.showChairLegColors();
        this.setState(() => ({
            chairLegColor: color,
        }));
    };
    toChangeCountOfChairs = (event) => {
        let count;
        let inputedCount = event.target.value;
        let reg = new RegExp(/^\d+$|^$/);
        let result = reg.test(inputedCount);
        if (result) {
            if (Number(event.target.value) < 10000) {
                count = event.target.value;
            } else {
                count = 10000;
            }
            this.props.changeCountOfChairs(count);
        }
    };
    toCountCostOfChair = () => {
        if (this.props.isChairChecked) {
            let cost = this.props.chairPrice * Number(this.props.countOfChairs);
            this.props.countChairCost(cost);
        } else {
            let cost = 0;
            this.props.countChairCost(cost);
        }
    };

    toCheckChair = () => {
        this.props.checkChair();
    };
    showChairColors = () => {
        this.setState((prevState) => ({
            isChairColorsShown: !prevState.isChairColorsShown,
        }));
    };
    showChairLegColors = () => {
        this.setState((prevState) => ({
            isChairLegColorsShown: !prevState.isChairLegColorsShown,
        }));
    };
    handleChangeColorsOfChair = (event) => {
        let val = event.target.value;
        this.props.chooseCountChairColors(val);
    };

    render() {
        const blockOfChairColors = chairColors.map((item, index) => {
            return (
                <div
                    key={index}
                    className="order__color-btn"
                    style={{backgroundColor: item.color}}
                    onClick={() => this.chooseColorForChair(item.color, item.name)}
                ></div>
            );
        });
        const blockOfChairLegsColors = chairColors.map((item, index) => {
            return (
                <div
                    key={index}
                    className="order__color-btn"
                    style={{backgroundColor: item.color}}
                    onClick={() => this.chooseColorForChairLeg(item.color, item.name)}
                ></div>
            );
        });

        let {countOfChairs, chairPrice, isChairChecked} = this.props;
        return (
            <tr>
                <td className="order__block">Стул</td>
                <td className="order__block">
                    <select className="order__block__select" onChange={this.handleChangeColorsOfChair}>
                        <option value="monochrome">Один цвет</option>
                        <option value="bicolor">Двухцветный</option>
                    </select>

                    {this.props.countColorsOfChair === 'monochrome' ? (
                        <div className="order__block__colors">
                            <button
                                className="order__block__colors__show-colors"
                                onClick={this.showChairColors}
                                style={{backgroundColor: this.state.chairColor}}
                            ></button>
                            {this.state.isChairColorsShown && (
                                <div className="order__block__colors__color">{blockOfChairColors}</div>
                            )}
                        </div>
                    ) : (
                        <div>
                            <div className="order__block__colors">
                                <p>Цвет стула:</p>
                                <button
                                    className="order__block__colors__show-colors"
                                    onClick={this.showChairColors}
                                    style={{backgroundColor: this.state.chairColor}}
                                ></button>
                                {this.state.isChairColorsShown && (
                                    <div className="order__block__colors__color">{blockOfChairColors}</div>
                                )}
                            </div>
                            <div className="order__block__colors">
                                <p>Цвет ножек:</p>
                                <button
                                    className="order__block__colors__show-colors"
                                    onClick={this.showChairLegColors}
                                    style={{backgroundColor: this.state.chairLegColor}}
                                ></button>
                                {this.state.isChairLegColorsShown && (
                                    <div className="order__block__colors__color">{blockOfChairLegsColors}</div>
                                )}
                            </div>
                        </div>
                    )}
                </td>
                <td className="order__block">
                    <input
                        className="order__block__count"
                        value={countOfChairs}
                        type="number"
                        min="0"
                        max="10000"
                        onChange={this.toChangeCountOfChairs}
                    />
                </td>
                <td className="order__block">{`${chairPrice} руб.`}</td>
                <td className="order__block">
                    <input type="checkbox" checked={isChairChecked} onChange={this.toCheckChair} />
                </td>
            </tr>
        );
    }
}

const Chair = connect(mapStateToProps, mapDispatchToProps)(ChairComponent);
export default Chair;
