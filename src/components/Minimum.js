import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

export class Minimum extends Component {
  continue = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select your answer')
    } else {
      this.props.nextStep();
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values, handleChange} = this.props;
    return (
      <div className="container">
        <h1>How much would you like to invest initially?</h1>
        <div className="options">
          <label htmlFor="minimum-none">
            <input type="radio" id="minimum-none" name="minimum" value="none" onChange={handleChange('minimum')}/>
            No minimum
          </label>
          <label htmlFor="minimum-500">
            <input type="radio" id="minimum-500" name="minimum" value="500" onChange={handleChange('minimum')}/>
            At least $500
          </label>
        </div>
        <div className="steps">
          <div className="btn-area" onClick={this.back}>
            <FontAwesomeIcon icon={faAnglesLeft} className="secondary"/>
            <button className="secondary" label="prev">Back</button>
          </div>
          <div className="btn-area" onClick={this.continue}>
            <button className="primary" label="next" >Next</button>
            <FontAwesomeIcon icon={faAnglesRight} className="primary" />
          </div>
        </div>
      </div>
    );
  }
}

export default Minimum