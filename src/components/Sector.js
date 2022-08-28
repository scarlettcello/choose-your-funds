import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

export class Sector extends Component {
  continue = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select at least one sector.')
    } else {
      this.props.nextStep();
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values, handleCheckbox} = this.props;
    return (
      <div className="container">
        <h1>Which sector wouldyou like to invest? (Select all you want)</h1>
        <div className="options">
          <label htmlFor='energy'>
            <input type="checkbox" id="energy" name="sector" onChange={handleCheckbox('sector')} value="energy"/>Energy
          </label>
          <label htmlFor='materials'>
            <input type="checkbox" id="materials"name="sector" onChange={handleCheckbox('sector')} value="materials"/>Materials
          </label>
          <label htmlFor='manufacturing'>
            <input type="checkbox" id="manufacturing" name="sector" onChange={handleCheckbox('sector')} value="manufacturing"/>Manufacturing
          </label>
          <label htmlFor='industrials'>
            <input type="checkbox" id="industrials" name="sector" onChange={handleCheckbox('sector')} value="industrials"/>Industrials
          </label>
          <label htmlFor='consumer-disc'>
            <input type="checkbox" id="consumer-disc" name="sector" onChange={handleCheckbox('sector')} value="consumer disc"/>Consumer discretionary
          </label>
          <label htmlFor='consumer-staples'>
            <input type="checkbox" id="consumer-staples" name="sector" onChange={handleCheckbox('sector')} value="consumer staples"/>Consumer staples
          </label>
          <label htmlFor='healthcare'>
            <input type="checkbox" id="healthcare" name="sector" onChange={handleCheckbox('sector')} value="healthcare"/>Healthcare
          </label>
          <label htmlFor='financial'>
            <input type="checkbox" id="financial" name="sector" onChange={handleCheckbox('sector')} value="financial"/>Financials<br/>
          </label>
          <label htmlFor='telecome'>
            <input type="checkbox" id="telecom" name="sector" onChange={handleCheckbox('sector')} value="telecom"/>Telecommunication services
          </label>
          <label htmlFor='utilities'>
            <input type="checkbox" id="utilities" name="sector" onChange={handleCheckbox('sector')} value="utilities"/>Utilities
          </label>
          <label htmlFor='real-estate'>
            <input type="checkbox" id="real-estate" name="sector" onChange={handleCheckbox('sector')} value="real estate"/>Real estate
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

export default Sector;