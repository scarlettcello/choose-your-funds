import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

export class Region extends Component {
  continue = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select the region.')
    } else {
      this.props.showResult();
    }
  }

  showResult = e => {
    e.preventDefault();
    this.props.showResult();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values, handleChange} = this.props;
    return (
      <div className='container'>
        <h1>Which region of the globe would you like to invest?</h1>
        <div className="options">
          <label htmlFor='canada'>
            <input type="radio" id="canada" name="region" value="Canada" onChange={handleChange('region')}/>Canada
          </label>
          <label htmlFor="us">
            <input type="radio" id="us" name="region" value="US" onChange={handleChange('region')}/>US
          </label>
          <label htmlFor='europe'>
            <input type="radio" id="europe" name="region" value="Europe" onChange={handleChange('region')}/>Europe
          </label>
          <label htmlFor='emerging'>
            <input type="radio" id="emerging" name="region" value="Emerging" onChange={handleChange('region')}/>Emerging
          </label>
          <label htmlFor='global'>
            <input type="radio" id="global" name="region" value="Global" onChange={handleChange('region')}/>Global
          </label>     
        </div>        
        <div className="steps">
          <div className="btn-area" onClick={this.back}>
            <FontAwesomeIcon icon={faAnglesLeft} className="secondary"/>
            <button className="secondary" label="prev">Back</button>
          </div>
          <div className="btn-area" onClick={this.continue}>
            <button className="primary" label="finish" >Finish</button>
            <FontAwesomeIcon icon={faAnglesRight} className="primary" />
          </div>
        </div>      
      </div>
    )
  }
}

export default Region;