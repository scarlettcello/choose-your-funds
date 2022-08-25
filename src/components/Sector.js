import React, { Component } from 'react'

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
      <>
        <h1>Which sector wouldyou like to invest?</h1>
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="energy"/>Energy
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="materials"/>Materials
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="manufacturing"/>Manufacturing
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="industrials"/>Industrials<br/>
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="consumer disc"/>Consumer discretionary
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="consumer staples"/>Consumer staples
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="healthcare"/>Healthcare
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="financial"/>Financials<br/>
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="telecom"/>Telecommunication services
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="utilities"/>Utilities
        <input type="checkbox" name="sector" onChange={handleCheckbox('sector')} value="real estate"/>Real estate
        <div>
          <button label="prev" onClick={this.back}>Back</button>
          <button label="next" onClick={this.continue}>Next</button>
        </div>      
      </>
    )
  }
}

export default Sector;