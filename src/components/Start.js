import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export class Start extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    const { values } = this.props;

    return (
      <div className="container">
        <h1>Do you want to know the best funds for you?</h1>
        <div className="btn-start" onClick={this.continue}>
          <button className="primary" label="next" >Start</button>
          <FontAwesomeIcon icon={faPlay} className="primary"/>
        </div>
      </div>
    )
  }
}

export default Start