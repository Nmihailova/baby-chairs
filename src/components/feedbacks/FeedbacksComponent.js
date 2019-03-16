import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestGetFeedbacksApi } from '../../js/actions';

import LeaveFeedback from './LeaveFeedbackComponent';

import './feedback.scss';

const mapStateToProps = state => {
  return {
    feedbacksList: state.feedbacksReducer.feedbacksList
  }
};

const mapDispatchToProps = dispatch => {
  return {
    requestGetFeedbacksApi: () => dispatch(requestGetFeedbacksApi())
  }
};

class FeedbacksComponent extends Component {
  componentDidMount () {
    this.props.requestGetFeedbacksApi();

  };

  render () {
    let feedbacks;
    if (typeof this.props.feedbacksList == "string") {
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
        <LeaveFeedback />
      </div>
    )
  }
};

const Feedbacks = connect(mapStateToProps, mapDispatchToProps)(FeedbacksComponent);
export default Feedbacks;