import style from './App.module.css';
import React, { Component } from 'react';
import { FeedBackOptions } from 'components/FeedBackButtons/FeedBackButtons';
import { Statistics } from 'components/StatisticSection/StatisticSection';
import { Notification } from 'components/Notification/Notification';
import { SectionTitle } from './SectionTitle/SectionTitle';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandler = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  // goodHandler = () => {
  //   this.setState(prevValue => {
  //     return { good: prevValue.good + 1 };
  //   });
  // };
  // badHandler = () => {
  //   this.setState(prevValue => {
  //     return { bad: prevValue.bad + 1 };
  //   });
  // };
  // neutralHandler = () => {
  //   this.setState(prevValue => {
  //     return { neutral: prevValue.neutral + 1 };
  //   });
  // };

  countTotalFeedback = currState =>
    Object.values(currState).reduce((acc, value) => acc + value, 0);

  render() {
    // console.log(this.state);
    const total = this.countTotalFeedback(this.state);
    const average = Math.floor((this.state.good / total) * 100);
    // console.log('average', average);
    return (
      <div className={style.component}>
        <SectionTitle title={'Please live your feedback'} />
        <>
          <FeedBackOptions
            buttons={this.state}
            name={Object.keys(this.state)}
            onClickHandler={this.onClickHandler}
          />
        </>
        <SectionTitle title={'Statistics'} />
        {total > 0 ? (
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={total}
            average={average}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
