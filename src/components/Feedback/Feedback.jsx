import { Component } from 'react';
import { FeedbackOptions } from './Control/Control';
import { Statistics } from './Value/Value';
import { Notification } from './NotificationMessage/NotificationMessage';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };
  leaveFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
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
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
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
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
export default Feedback;
