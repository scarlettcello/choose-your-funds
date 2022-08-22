import React, { Component } from 'react';

export class Start extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    const { values } = this.props;

    return (
      <>
        <h1>Do you want to know the best funds for you?</h1>
        <button label="Start" onClick={this.continue} >Start</button>
      </>
    )
  }
}

export default Start