import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { Component } from 'react';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    
    const name = e.currentTarget.name
    this.setState(prevState=> ({
      [name] : prevState[name] + 1 
    }))
    
  }

  CountTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    const total =  this.CountTotalFeedback()
    const posFeed = Math.round((this.state.good / total) * 100);
    return posFeed
  }

  render(){
    return (
      <div className='div'>
        <Section title="Please leave a feedback">
            <FeedbackOptions 
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
          {this.CountTotalFeedback() === 0 ? 
          (<Notification message='There is no feedback'/>) : 
          (<Section title="Statistics">
          <Statistics
           good={this.state.good}
           neutral={this.state.neutral}
           bad={this.state.bad}
           total={this.CountTotalFeedback()}
           positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>)} 
      </div>
    );
  }
};
