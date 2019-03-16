import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { requestLeaveFeedbackApi } from '../../js/actions';

import './feedback.scss';

const mapDispatchToProps = dispatch => {
    return {
      requestLeaveFeedbackApi: data => dispatch(requestLeaveFeedbackApi(data))
    }
};

class LeaveFeedbackComponent extends Component {
    state = {
        isFeedbackFormShown: false,
        authorName: '',
        residenceCity: '',
        feedbackText: '',
        errorInRequest: false
    };
    showFeedBackForm = () => {
        this.setState((prevState) => ({
          isFeedbackFormShown: !prevState.isFeedbackFormShown
        }))
      };
    
      changeAuthorName = event => {
        let name = event.target.value;
        this.setState(() => ({
          authorName: name
        }));
      };
    
      changeResidenceCity = event => {
        let city = event.target.value;
        this.setState(() => ({
          residenceCity: city
        }));
      };
    
      inputComment = event => {
        let text = event.target.value;
        this.setState(() => ({
          feedbackText: text
        }))
      };
      cutPotentialDangerousChars = (data) => {
        let potentialDangerousChars = /[<>{}\[\]]/gi;
        for (let key in data) {
          let newStr = data[key].toString().replace(potentialDangerousChars, " ");
          data[key] = newStr;
        }
      };
    
      leaveFeedback = () => {
        let dataObj = {
          authorName: this.state.authorName,
          residenceCity: this.state.residenceCity,
          feedbackText: this.state.feedbackText
        };
        this.cutPotentialDangerousChars(dataObj);
    
        this.props.requestLeaveFeedbackApi(dataObj);
        window.location.reload();
      };

      render() {
          return (
              <Fragment>
                {!this.state.isFeedbackFormShown &&
                <button className="feedback__btn" onClick={this.showFeedBackForm}>Оставить отзыв</button>
                }
                {this.state.isFeedbackFormShown &&
                <div className="feedback__form">
                    <input className="feedback__form__name" value={this.state.authorName} onChange={this.changeAuthorName} placeholder="Ваше имя" />
                    <input className="feedback__form__city" value={this.state.residenceCity} onChange={this.changeResidenceCity} placeholder="Ваш город" />

                    <label>
                    <p>Введите текст отзыва:</p>
                    <textarea className="feedback__form__text" rows="10" cols="68" value={this.state.comments} onChange={this.inputComment} />
                    </label>
                    <button className="feedback__form__btn" onClick={this.leaveFeedback}>Отправить отзыв</button>
                </div>
                }
              </Fragment>
          )
      }
};

const LeaveFeedback = connect(null, mapDispatchToProps)(LeaveFeedbackComponent);
export default LeaveFeedback;
