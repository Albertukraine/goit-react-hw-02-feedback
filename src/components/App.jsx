import style from './App.module.css';
import React, { Component } from 'react';
import { FeedBackOptions } from 'components/FeedBackButtons/FeedBackButtons';
import { Statistics } from 'components/StatisticSection/StatisticSection';

export class App extends Component {
  

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodHandler = () => {
    this.setState(prevValue => {
      return { good: prevValue.good + 1 };
    });
  };
  badHandler = () => {
    this.setState(prevValue => {
      return { bad: prevValue.bad + 1 };
    });
  };
  neutralHandler = () => {
    this.setState(prevValue => {
      return { neutral: prevValue.neutral + 1 };
    });
  };

  countTotalFeedback = currState =>
    Object.values(currState).reduce((acc, value) => acc + value, 0);

  render() {
    const total = this.countTotalFeedback(this.state);
    const average = Math.floor((this.state.good / total) * 100);
    // console.log('average', average);
    return (
      <div className={style.component}>
        <h2 className={style.header}>Please live your feedback</h2>
        <>
          <FeedBackOptions
            buttons={this.state}
            name={Object.keys(this.state)}
            goodHandler={this.goodHandler}
            badHandler={this.badHandler}
            neutralHandler={this.neutralHandler}
          />
        </>
        <h2 className={style.header}>Statistics</h2>
        <Statistics
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          total={total}
          average={average}
        />
      </div>
    );
  }
}


