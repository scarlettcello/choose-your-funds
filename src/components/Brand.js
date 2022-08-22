import React, { Component } from 'react'

export class Brand extends Component {
  continue = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select the brand.')
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
        <h1>Which brand of fund do you like?</h1>
        <input type="radio" name="brand" value="cibc" onChange={handleChange('brand')} />cibc
        <input type="radio" name="brand" value="renaissance" onChange={handleChange('brand')}/>renaissance
        <div>
          <button label="prev" onClick={this.back}>Back</button>
          <button label="next" onClick={this.continue}>Next</button>
        </div>      
      </>
    )
  }
}

export default Brand