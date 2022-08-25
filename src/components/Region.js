import React, { Component } from 'react'

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
      <>
        <h1>Which region of the globe would you like to invest?</h1>
        <input type="radio" name="region" value="Canada" onChange={handleChange('region')}/>Canada
        <input type="radio" name="region" value="US" onChange={handleChange('region')}/>US
        <input type="radio" name="region" value="Europe" onChange={handleChange('region')}/>Europe
        <input type="radio" name="region" value="Emerging" onChange={handleChange('region')}/>Emerging
        <input type="radio" name="region" value="Global" onChange={handleChange('region')}/>Global
        <div>
          <button label="prev" onClick={this.back}>Back</button>
          <button label="next" onClick={this.showResult}>Finish</button>
        </div>      
      </>
    )
  }
}

export default Region;