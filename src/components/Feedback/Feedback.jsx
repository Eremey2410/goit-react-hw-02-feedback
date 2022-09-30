import { Component } from 'react';
import { FeedbackTitle } from './Feedback.styled.jsx';
import { FeedbackOptions } from './Control';
import { Value } from './Value';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    positivePercentage: this.props.initialValue,
  };
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      total: prevState.total + 1,
    }));
    this.setState({ positivePercentage: 100 });
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      total: prevState.total + 1,
      positivePercentage: prevState.positivePercentage - 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
      total: prevState.total + 1,
    }));
  };

  render() {
    return (
      <div>
        <FeedbackTitle>Please leave feedback</FeedbackTitle>
        <FeedbackOptions
          onHandleGood={this.handleGood}
          onHandleNeutral={this.handleNeutral}
          onHandleBad={this.handleBad}
        />
        <span>Statistics</span>
        <Value
          valueGood={this.state.good}
          valueNeutral={this.state.neutral}
          valueBad={this.state.bad}
          valueTotal={this.state.total}
          valuePositivePercentage={this.state.positivePercentage}
        />
      </div>
    );
  }
}
export default Feedback;
