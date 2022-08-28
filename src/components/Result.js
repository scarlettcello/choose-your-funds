import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

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
      <div className='container'>
        <h1>The funds for you are: </h1>
        {
          yourFunds.length < 1 ? <p>We couldn't find a fund you want. Please contact one of our awesome advisors!</p> : 
          <ul>{yourFunds.map(item => <li key={item.id}>{item.name}</li>)}</ul>
        }
        <div className="steps">
          <div className="btn-area" onClick={this.back}>
            <FontAwesomeIcon icon={faAnglesLeft} className="secondary"/>
            <button className="secondary" label="prev">Back</button>
          </div>
          <div className="btn-area" onClick={this.continue}>
            <button className="primary" label="Start Over" onClick={this.startOver}>Start over</button>
            <FontAwesomeIcon icon={faAnglesRight} className="primary" />
          </div>
        </div>   
      </div>
    )
  }
}

export default Result