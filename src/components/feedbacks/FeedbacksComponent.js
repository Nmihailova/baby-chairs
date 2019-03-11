import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestLeaveFeedbackApi, requestGetFeedbacksApi } from '../../js/actions';

import './feedback.scss';

const mapStateToProps = state => {
  return {
    feedbacksList: state.feedbacksReducer.feedbacksList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestLeaveFeedbackApi: data => dispatch(requestLeaveFeedbackApi(data)),
    requestGetFeedbacksApi: () => dispatch(requestGetFeedbacksApi())
  }
};

class FeedbacksComponent extends Component {
  state = {
    isFeedbackFormShown: false,
    authorName: '',
    residenceCity: '',
    feedbackText: '',
    errorInRequest: false
  };

  componentDidMount () {
    this.props.requestGetFeedbacksApi();

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

  render () {
    let feedbacks;
    if (this.props.feedbacksList == "Не удалось загрузить отзывы.") {
      feedbacks = this.props.feedbacksList;
    } else {
      feedbacks = this.props.feedbacksList.map((item, index) => {
        return (
          <div className="feedback__item" key={index}>
            <div className="feedback__item__text">{item.feedbackText}</div>
            <div className="feedback__item__author">{item.authorName}, {item.residenceCity}</div>
          </div>
        )
      });
    }

    return (
      <div className="feedback">
        {this.props.feedbacksList.length === 0 ?
          <div className="feedback__empty">Отзывов пока нет</div>
          : <div>
            {feedbacks}
          </div>
        }


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
      </div>
    )
  }
};

const Feedbacks = connect(mapStateToProps, mapDispatchToProps)(FeedbacksComponent);
export default Feedbacks;