import React, { Component } from 'react'

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
      <>
        <h1>How much would you like to invest initially?</h1>
        <input type="radio" name="minimum" value="none" onChange={handleChange('minimum')}/>No minimum
        <input type="radio" name="minimum" value="500" onChange={handleChange('minimum')}/>At least $500
        <div>
          <button label="prev" onClick={this.back}>Back</button>
          <button label="next" onClick={this.continue}>Next</button>
        </div>      
      </>
    )
  }
}

export default Minimum