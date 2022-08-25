import React, { Component } from 'react'

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
      <>
        <h1>How much volatility can you tolerate?</h1>
        <input type="radio" name="volatility" value="low" onChange={handleChange('volatility')}/>Less than 10%
        <input type="radio" name="volatility" value="medium" onChange={handleChange('volatility')}/>More than 10% but less than 20%
        <input type="radio" name="volatility" value="high" onChange={handleChange('volatility')}/>More than 20%
        <div>
          <button label="prev" onClick={this.back}>Back</button>
          <button label="next" onClick={this.continue}>Next</button>
        </div>      
      </>
    )
  }
}

export default Volatility;