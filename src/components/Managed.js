import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

export class Managed extends Component {
  continue = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select one.')
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
        <h1>Do you want your funds managed by professionals?</h1>
        <div className="options">
          <label htmlFor="managed">
          <input type="radio" id="managed" name="managed" value="true" onChange={handleChange('managed')} />Managed
          </label>
          <label htmlFor="unmanaged">
          <input type="radio" id="unmanaged" name="managed" value="false" onChange={handleChange('managed')}/>Unmanaged
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
    )
  }
}

export default Managed;