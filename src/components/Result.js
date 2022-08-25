import React, { Component } from 'react';

export class Result extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  startOver = e=> {
    e.preventDefault();
    this.props.startOver();
  }

  render() {
    const { yourFunds } = this.props;

    return (
      <>
        <h1>The funds for you are: </h1>
        <ul>
          {yourFunds.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
        <button label="Start Over" onClick={this.startOver}>Start over</button>
      </>
    )
  }
}

export default Result