import { Component } from 'react';
import { FeedbackOptions } from './Control/Control';
import { Statistics } from './Value/Value';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div>
        <FeedbackOptions
          onHandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
        />
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            valueGood={this.state.good}
            valueNeutral={this.state.neutral}
            valueBad={this.state.bad}
            valueTotal={this.countTotalFeedback()}
            valuePositivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage />
        )}
      </div>
    );
  }
}
export default Feedback;
