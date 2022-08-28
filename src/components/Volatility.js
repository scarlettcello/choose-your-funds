import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

export class Volatility extends Component {
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
      <div className='container'>
        <h1>How much volatility can you tolerate?</h1>
        <div className="options">
          <label htmlFor="low">
            <input type="radio" id="low" name="volatility" value="low" onChange={handleChange('volatility')}/>Less than 10%
          </label>
          <label htmlFor='medium'>
            <input type="radio" id="medium" name="volatility" value="medium" onChange={handleChange('volatility')}/>Between 10% and 20%
          </label>
          <label htmlFor='high'>
            <input type="radio" id="high" name="volatility" value="high" onChange={handleChange('volatility')}/>More than 20%
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

export default Volatility;